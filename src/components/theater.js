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

{/*
        <audio id="audioElement" src="http://localhost:8080/src/videos/morebeebz.mp3"></audio>
        <button onClick={this.play}>Play the Audio</button>
        <button onClick={this.pause}>Pause the Audio</button>
        <button onClick={this.increaseVol}>Increase Volume</button>
        <button onClick={this.decreaseVol}>Decrease Volume</button>  
*/}

      <a-scene>
        <a-assets>
          <a-asset-item id="theater-model" src="http://localhost:8080/src/models/model4.dae"></a-asset-item>
          <a-asset-item id="ferrari" src="http://localhost:8080/src/models/ferrarif12.dae"></a-asset-item>
          <a-asset-item id="helicopter" src="http://localhost:8080/src/models/helicopter.dae"></a-asset-item>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
        </a-assets>

        <a-sky src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"></a-sky>
        <a-plane src="#groundTexture" rotation="-90 0 0" width="30" height="30" repeat="35 35"></a-plane>

        <a-entity collada-model="#theater-model" position="0 1 0"></a-entity>
        <a-entity collada-model="#ferrari" position="0 0 -2" rotation="0 90 0"></a-entity>
        <a-entity collada-model="#helicopter" position="3 8 -10"></a-entity>

        <a-entity position="10 0 -10">
          <a-camera></a-camera>
        </a-entity>
      </a-scene>

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