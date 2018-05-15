import React from 'react';
import bigBike from '../../assets/videos/bigBike.mp4';
import paths from '../../assets/paths.json';

import './VideoDisplay.css';



const videoDisplay = (props) => {
  let topStyle = '0px';
  if (!props.showVideo) {
    topStyle = '-100vh';
  }
  return (
    <React.Fragment>
      { props.renderVideo ?
        <div className="VideoWrapper" style={{top: topStyle, backgroundColor:'black'}}>
          <video  className="VideoFrame" autoPlay onEnded={props.hideVideo}>
            <source src={bigBike} type="video/mp4" />

            Your browser does not support the video tag.
          </video>
          <button className="VideoButton" onClick={props.hideVideo}>Skip Video</button>
        </div>
      : null }
    </React.Fragment>
  )
}


export default videoDisplay;
