import React from 'react';
// I chose to use the typical react style imports instead of putting the import
// paths in an external json. I still put all the text in an external json as
// requested, but putting the file paths into the json file seemed like a very
// strange way to do it, so I went with what I consider the best practice.
// Perhaps putting the paths into the json file would have made more sense
// with a different implementation.
import backgroundImg from '../../assets/images/mtb.jpg';
import audioIcon from '../../assets/images/audioIcon.png';
import paths from '../../assets/paths.json';
import bikeSound from '../../assets/audio/bikePassing.mp3';


import './AudioInterface.css';

const audioInterface = (props) => (
  <div className="AudioWrapper">
    <h1 className="AudioTitle">{paths.title}</h1>
    <p className="AudioText">{paths.text}</p>
    <button className="AudioButton" onClick={props.playAudio}>{paths.audioButton}
      <img className="AudioIcon" src={audioIcon} alt="" />
    </button>
    <audio ref={props.myRef}>
      <source src={bikeSound} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
)


export default audioInterface;
