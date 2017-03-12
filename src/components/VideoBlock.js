import React, { Component } from 'react';

class VideoBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluation: ''
    };
  }

  componentDidMount() {
    this.detectFacePosition();
  }

  detectFacePosition() {
    let video = document.getElementById('video');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);

    tracking.track('#video', tracker, { camera: true });

    tracker.on('track', (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (event.data.length < 1) {
        this.setState({
          evaluation: 'Bad position'
        });
      }

      for (let rect of event.data) {
        ctx.strokeStyle = '#a64ceb';
        ctx.lineWidth = "5";
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
        this.setState({
          evaluation: 'Good position'
        });
      }
    });
  }

  render() {
    const canvasStyle = {
      position: "absolute"
    };

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-3">
          <video id="video" width="320" height="240" preload autoPlay style={canvasStyle}/>
          <canvas id="canvas" width="320" height="240" style={canvasStyle}/>
        </div>
        <div className="col-md-4">
          <h3>{this.state.evaluation}</h3>
        </div>
      </div>
    );
  }
}

export default VideoBlock;
