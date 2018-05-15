import React from 'react';
// I chose to use the typical react style imports instead of putting the import
// paths in an external json. I still put all the text in an external json as
// requested, but putting the file paths into the json file seemed like a very
// strange way to do it, so I went with what I consider the best practice.
// Perhaps putting the paths into the json file would have made more sense
// with a different implementation.
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
          {/* I took out the video controls, because they weren't requested and
          this felt cleaner, but they could easily be added back in */}
          <video  className="VideoFrame" autoPlay onEnded={props.hideVideo}>
            <source src={bigBike} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="VideoButton" onClick={props.hideVideo}><strong>{paths.videoButton}</strong></button>
        </div>
      : null }
    </React.Fragment>
  )
}


export default videoDisplay;
