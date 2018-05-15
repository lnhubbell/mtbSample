import React from 'react';
import backgroundImg from '../../assets/images/mtb.jpg';
import paths from '../../assets/paths.json';
import bikeSound from '../../assets/audio/bikePassing.mp3';
// import bikeSound from paths.audio;
import './AudioInterface.css';

const audioInterface = (props) => (
    <React.Fragment>
      {
        !props.showVideo ?
          (
            <div className="AudioWrapper">
              <h1 className="AudioTitle">{paths.title}</h1>
              <p className="AudioText">{paths.text}</p>
              <button className="AudioButton" onClick={props.playAudio}>Play Audio</button>
              <audio ref={props.myRef}>
                <source src={bikeSound} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )
        :
        null
      }
    </React.Fragment>
)


export default audioInterface;
