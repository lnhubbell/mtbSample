import React from 'react';
import backgroundImg from '../../assets/images/mtb.jpg';
import audioIcon from '../../assets/images/audioIcon.png';
import paths from '../../assets/paths.json';
import bikeSound from '../../assets/audio/bikePassing.mp3';
import './AudioInterface.css';

const audioInterface = (props) => (
  <div className="AudioWrapper">
    <h1 className="AudioTitle">{paths.title}</h1>
    <p className="AudioText">{paths.text}</p>
    <button className="AudioButton" onClick={props.playAudio}>Play Audio
      <img className="AudioIcon" src={audioIcon} alt="" />
    </button>
    <audio ref={props.myRef}>
      <source src={bikeSound} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
)


export default audioInterface;
