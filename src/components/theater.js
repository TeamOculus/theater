import React from 'react';

class Theater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">

{/*
        <a-scene>
          <a-assets>
            <video id="nowplaying" autoplay loop="true" src="http://localhost:8080/src/assets/videos/beebz.mp4" />
          </a-assets>     
          <a-video src="#nowplaying" width="16" height="9" position="0 0 -20"></a-video>
        </a-scene>
*/}  

{/*
        <audio id="audioElement" src="http://localhost:8080/src/assets/videos/morebeebz.mp3"></audio>
        <button onClick={this.play}>Play the Audio</button>
        <button onClick={this.pause}>Pause the Audio</button>
        <button onClick={this.increaseVol}>Increase Volume</button>
        <button onClick={this.decreaseVol}>Decrease Volume</button>  
*/}

      <a-scene>
        <a-assets>
          <a-asset-item id="theater-model" src="http://localhost:8080/src/assets/models/theater/model3.dae"></a-asset-item>

        </a-assets>


        <a-entity collada-model="#theater-model" position="0 0 0"></a-entity>


        {/* <a-camera position="9.75 6.5 8.5"> */}
        <a-camera position="0 0 0">
          <a-cursor color="#4CC3D9" fuse="true" fuse-timeout="3000">
            <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
          </a-cursor>
        </a-camera>


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