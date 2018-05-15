import React from 'react';
import bigBuck from '../../assets/videos/BigBuckBunny_320x180.mp4';
import bigBike from '../../assets/videos/bigBike.mp4';
import paths from '../../assets/paths.json';

import './VideoDisplay.css';



const videoDisplay = (props) => (
    <React.Fragment>
      {
        props.showVideo ?
          (
            <div className="VideoWrapper">
              <video  className="VideoFrame" controls autoPlay onEnded={props.hideVideo}>
                <source src={bigBike} type="video/mp4" />

                Your browser does not support the video tag.
              </video>
              <button className="VideoButton" onClick={props.hideVideo}>Skip Video</button>
            </div>
          )
        :
        null
      }
    </React.Fragment>
)


export default videoDisplay;
