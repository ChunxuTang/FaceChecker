import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoBlock from './components/VideoBlock';

class FaceCheckerApp extends Component {
  render() {
    return (
      <div>
        <VideoBlock/>
      </div>
    );
  }
}

ReactDOM.render(<FaceCheckerApp/>, document.querySelector('.react-container'));
