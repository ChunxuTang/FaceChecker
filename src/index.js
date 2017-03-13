import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleBlock from './components/TitleBlock';
import VideoBlock from './components/VideoBlock';

class FaceCheckerApp extends Component {
  render() {
    return (
      <div>
        <TitleBlock/>
        <VideoBlock/>
      </div>
    );
  }
}

ReactDOM.render(<FaceCheckerApp/>, document.querySelector('.react-container'));
