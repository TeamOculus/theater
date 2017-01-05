import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Theater extends React.Component {
  constructor() {
    super();
    this.state = {
      currentplaying: "#porter"
    };
    this.goHome = this.goHome.bind(this);
    this.playPorter = this.playPorter.bind(this);
    this.playOkgo = this.playOkgo.bind(this);
    this.playKendrick = this.playKendrick.bind(this);
    this.playLianne = this.playLianne.bind(this);

  }

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
            <video id="porter" autoplay loop="true" src="http://localhost:8080/src/assets/videos/porter.mp4" />
            <video id="okgo" autoplay loop="true" src="http://localhost:8080/src/assets/videos/okgo.mp4" />
            <video id="kendrick" autoplay loop="true" src="http://localhost:8080/src/assets/videos/kendrick.mp4" />
            <video id="lianne" autoplay loop="true" src="http://localhost:8080/src/assets/videos/lianne.mp4" />

            <img id="exit" src="http://localhost:8080/src/assets/imgs/theaterexit.png" />
            <img id="sadmachine" src="http://localhost:8080/src/assets/imgs/sadmachine.jpg" />
            <img id="iwont" src="http://localhost:8080/src/assets/imgs/iwont.jpg" />
            <img id="i" src="http://localhost:8080/src/assets/imgs/i.jpg" />
            <img id="whatyou" src="http://localhost:8080/src/assets/imgs/whatyou.jpg" />
          </a-assets>

          <a-entity
            audioanalyser={"src: " + this.state.currentplaying + "; smoothingTimeConstant: 0.9"}
            audioanalyser-levels-scale="max: 50; multiplier: 0.03"
            entity-generator="mixin: bar; num: 11"
            layout=""
            rotation="0 90 0"
            position="1 9.5 8"
          ></a-entity>
          <a-entity
            audioanalyser={"src: " + this.state.currentplaying + "; smoothingTimeConstant: 0.9"}
            audioanalyser-levels-scale="max: 50; multiplier: 0.03"
            entity-generator="mixin: bar; num: 11"
            layout=""
            rotation="0 90 0"
            position="19 9.5 8"
          ></a-entity>

          <a-collada-model src="#theater-model" position="0 0 0"></a-collada-model>
          <a-video src={this.state.currentplaying} width="20.5" height="12" position="10.05 7.5 -5" ></a-video>

          <a-plane id="exitdoor" color="white" height="4.06" width="2.28" position="0.10 2.14 -2.88" rotation="0 90 0"></a-plane>
          <a-image src="#exit" height="0.98" width="1.78" position="0.10 4.76 -2.88" rotation="0 90 0"></a-image>
          <a-image src="#sadmachine" height="3" width="3" position="4 2 -2.88" rotation="0 0 0"></a-image>
          <a-image src="#iwont" height="3" width="3" position="8 2 -2.88" rotation="0 0 0"></a-image>
          <a-image src="#i" height="3" width="3" position="12 2 -2.88" rotation="0 0 0"></a-image>
          <a-image src="#whatyou" height="3" width="3" position="16 2 -2.88" rotation="0 0 0"></a-image>

          <a-entity position="9.75 5 8.5">
            <a-camera>
              <a-cursor color="yellow" fuse="true" fuse-timeout="3000">
                <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
              </a-cursor>
            </a-camera>
          </a-entity>   
          
           
        </a-scene>

      </div>
    )
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    let goHomePointer = this.goHome;
    document.querySelector('#exitdoor').addEventListener('click', function () {
      console.log('I was clicked!');
      goHomePointer();
    });
  }

  goHome() {
    this.context.router.push("/")
  }

  playPorter() {

  }
  playOkgo() {

  }
  playKendrick() {

  }
  playLianne() {
    
  }

}

export default Theater;