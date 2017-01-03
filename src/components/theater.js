import React from 'react';

class Theater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">

{/*
        <a-scene>
          <a-assets>
            <video id="nowplaying" autoplay loop="true" src="http://localhost:8080/src/videos/beebz.mp4" />
          </a-assets>     
          <a-video src="#nowplaying" width="16" height="9" position="0 0 -20"></a-video>
        </a-scene>
*/}  
        <audio id="audioElement" src="http://localhost:8080/src/videos/morebeebz.mp3"></audio>
        <button onClick={this.play}>Play the Audio</button>
        <button onClick={this.pause}>Pause the Audio</button>
        <button onClick={this.increaseVol}>Increase Volume</button>
        <button onClick={this.decreaseVol}>Decrease Volume</button>  
        
      </div>
    )
  }

  play() {
    // make play audio trigger play video
    document.getElementById('audioElement').play();
  }
  pause() {
    document.getElementById('audioElement').pause();
  }
  increaseVol() {
    document.getElementById('audioElement').volume+=0.1;
  }
  decreaseVol() {
    document.getElementById('audioElement').volume-=0.1;
  }
}

export default Theater;