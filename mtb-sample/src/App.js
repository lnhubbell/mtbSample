import React, { Component } from 'react';

import './App.css';

import VideoDisplay from './components/VideoDisplay/VideoDisplay';
import AudioInterface from './components/AudioInterface/AudioInterface';


// if this was a larger app I would prefer to keep app.js very slim, and use containers
// to manage state
class App extends Component {
  state = {
    renderVideo: true,
    showVideo: true,
    myRef: null,

  }

  // hide video simply triggers a css transition that slides the video off the screen
  hideVideo = () => {
    this.setState({showVideo: false});
    setTimeout(this.destroyVideo, 400);
  };

  // destroy video actually removes the video from the DOM
  destroyVideo = () => {
    this.setState({renderVideo: false});
  }

  // this triggers the audio
  playAudio = () => {
    this.state.myRef.current.play();
  };

  // once the page has been mounted onto the DOM, we create a ref to attach to the
  // audio play button
  componentDidMount = () => {
    const myRef = React.createRef();
    this.setState({myRef: myRef});
  }

  render() {
    return (
      <div className="App">
        <VideoDisplay showVideo={this.state.showVideo} hideVideo={this.hideVideo} renderVideo={this.state.renderVideo}/>
        <AudioInterface showVideo={this.state.showVideo} playAudio={this.playAudio} myRef={this.state.myRef} />
      </div>
    );
  }
}

export default App;
