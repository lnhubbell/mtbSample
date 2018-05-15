import React, { Component } from 'react';

import './App.css';

import VideoDisplay from './components/VideoDisplay/VideoDisplay';
import AudioInterface from './components/AudioInterface/AudioInterface';

class App extends Component {
  state = {
    showVideo: true,
    myRef: null,
  }

  hideVideo = () => {
    this.setState({showVideo: false});
  };

  playAudio = () => {
    this.state.myRef.current.play();
  };

  componentDidMount = () => {
    const myRef = React.createRef();
    this.setState({myRef: myRef});
  }

  render() {
    return (
      <div className="App">
        <VideoDisplay showVideo={this.state.showVideo} hideVideo={this.hideVideo} />
        <AudioInterface showVideo={this.state.showVideo} playAudio={this.playAudio} myRef={this.state.myRef}/>
      </div>
    );
  }
}

export default App;
