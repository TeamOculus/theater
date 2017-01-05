import React from 'react';

class Theater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">


{/*
        <audio id="audioElement" src="http://localhost:8080/src/assets/sounds/okgo.mp3"></audio>
        <button onClick={this.play}>Play the Audio</button>
        <button onClick={this.pause}>Pause the Audio</button>
        <button onClick={this.increaseVol}>Increase Volume</button>
        <button onClick={this.decreaseVol}>Decrease Volume</button>  
*/}

      <a-scene>
        <a-assets>
          <a-asset-item id="theater-model" src="http://localhost:8080/src/assets/models/theater/model.dae"></a-asset-item>
          <video id="nowplaying" autoplay loop="true" src="http://localhost:8080/src/assets/videos/okgo.mp4" />

          <a-mixin id="bar"
          geometry="primitive: box"
          material="color: black"
          scale-y-color="from: 10 60 10; to: 180 255 180; maxScale: 15"
        ></a-mixin>
          <audio id="song" autoplay loop src="http://localhost:8080/src/assets/sounds/okgo.mp3"></audio>
        </a-assets>

        <a-entity
        audioanalyser="src: #song; smoothingTimeConstant: 0.9"
        audioanalyser-levels-scale="max: 50; multiplier: 0.06"
        entity-generator="mixin: bar; num: 256"
        layout="type: circle; radius: 10"
        rotation="0 180 0"
        ></a-entity>

        <a-light type="ambient" color="#222"></a-light>
        <a-light type="point" position="0 1 0" intensity="2"></a-light>
        <a-circle color="#333" opacity="0.8" rotation="-90 0 0" radius="12"
          roughness="1"></a-circle>
        <a-sky color="#222"></a-sky>

{/* 
        <a-entity collada-model="#theater-model" position="0 0 0"></a-entity>
        <a-video src="#nowplaying" width="20.5" height="12" position="10.05 7.5 -5" ></a-video>
        <a-entity
          audio-analyser="#song"
        ></a-entity>


       <a-entity position="9.75 5 8.5">
        <a-camera>
          
        </a-camera>
      </a-entity>
  */}     


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