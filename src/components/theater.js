import React from 'react';

class Theater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">

        <a-scene antialias="true">


          <a-assets>
            <a-mixin id="bar"
              geometry="primitive: box"
              material="color: black"
              scale-y-color="from: 10 160 50; to: 180 255 180; maxScale: 15"
            ></a-mixin>
          
            <a-asset-item id="theater-model" src="http://localhost:8080/src/assets/models/theater/model.dae"></a-asset-item>
            <video id="nowplaying" autoplay loop="true" src="http://localhost:8080/src/assets/videos/sadmachine.mp4" />
          </a-assets>

          <a-entity
            audioanalyser="src: #nowplaying; smoothingTimeConstant: 0.9"
            audioanalyser-levels-scale="max: 50; multiplier: 0.03"
            entity-generator="mixin: bar; num: 11"
            layout=""
            rotation="0 90 0"
            position="1 9.5 8"
          ></a-entity>
          <a-entity
            audioanalyser="src: #nowplaying; smoothingTimeConstant: 0.9"
            audioanalyser-levels-scale="max: 50; multiplier: 0.03"
            entity-generator="mixin: bar; num: 11"
            layout=""
            rotation="0 90 0"
            position="19 9.5 8"
          ></a-entity>

          <a-entity collada-model="#theater-model" position="0 0 0"></a-entity>
          <a-video src="#nowplaying" width="20.5" height="12" position="10.05 7.5 -5" ></a-video>

          <a-entity position="9.75 5 8.5">
            <a-camera>
              
            </a-camera>
          </a-entity>   
          
           
        </a-scene>

{/*
        <audio id="audioElement" src="http://localhost:8080/src/assets/sounds/sadmachine.mp3"></audio>
        <button onClick={this.play}>Play the Audio</button>
        <button onClick={this.pause}>Pause the Audio</button>
        <button onClick={this.increaseVol}>Increase Volume</button>
        <button onClick={this.decreaseVol}>Decrease Volume</button>  


      <a-scene>
        <a-assets>
          <a-asset-item id="theater-model" src="http://localhost:8080/src/assets/models/theater/model.dae"></a-asset-item>
          <video id="nowplaying" autoplay loop="true" src="http://localhost:8080/src/assets/videos/sadmachine.mp4" />

          <audio id="song" autoplay loop src="http://localhost:8080/src/assets/sounds/sadmachine.mp3"></audio>
        </a-assets>

        <a-entity collada-model="#theater-model" position="0 0 0"></a-entity>
        <a-video src="#nowplaying" width="20.5" height="12" position="10.05 7.5 -5" ></a-video>

        <a-entity position="9.75 5 8.5">
          <a-camera>
            
          </a-camera>
        </a-entity>    

      </a-scene>
*/} 
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