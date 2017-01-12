import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Underwater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: [],
      fish: []
    }
    this.goHome = this.goHome.bind(this);
    this.reversedir1 = this.reversedir1.bind(this)
    this.reversedir2 = this.reversedir2.bind(this)
  }
  componentWillMount() {
     var i = 0;
     var l = 0;
     while(i < 100) {
      let x = Math.random() * 100 - 50;
      let y = Math.random() * 10;
      let z = Math.random() * 100 - 50;
      let bubble = this.state.bubble;
      bubble.push(<a-entity key={i} collada-model="#bubble" position={`${x} ${y} ${z}`} scale = "0.02 0.02 0.02"><a-animation attribute="position" to={`${x + Math.random() * 2 - 1} ${y + 5} ${z}`} dur={`${Math.random() * 12000}`} begin="3000" repeat="indefinite"></a-animation>
          </a-entity>);
       i++;
     }
     while(l < 7) {
       let x = Math.random() * 15 -5;
       let y = Math.random() * 5;
       let z = Math.random() * 5 -5;
       let fish = this.state.fish;
        fish.push(<a-entity key={l} id = "fish" collada-model="#fish1" position={`${x} ${y} ${z}`} scale = "1 1 1">
       <a-animation attribute="position" from={`${x + 30} ${y} ${z}`} to= {`${x + 15} ${y} ${z}`} repeat="indefinite" dur="8000"></a-animation>
        </a-entity>);
        l++;
     }
  }
 render(){
      var j = 0
      var k = 0;
      var seaweed = [];
      var coral = [];
      let x, y, z;
      while(j < 50) {
        x = Math.random() * 70 -30;
        y = 0;
        z = Math.random() * 70 -30;
        seaweed.push(<a-entity key={j} collada-model="#seaweed" position={`${x} ${y} ${z}`}></a-entity> );
        j++;
      }
      while(k < 50) {
        x = Math.random() * 60 -20;
        y = 0;
        z = Math.random() * 60 -20;
        coral.push(<a-entity key={k} collada-model="#coral" position={`${x} ${y} ${z}`}></a-entity>);
        k++;
      }
    return (
      <div className="show-vr-div">
        <a-scene>
            <a-assets>
              <audio id = "jaws" src = "https://teamoculus.github.io/theater/src/assets/sounds/jaws.mp3"></audio>
              <audio src = "https://teamoculus.github.io/theater/src/assets/sounds/ocean.mp3" autoPlay preload></audio>
              <img id="exit-blue" src="https://teamoculus.github.io/theater/src/assets/imgs/theaterexit.png" />
              <a-asset-item id='background' src='https://teamoculus.github.io/theater/src/assets/models/underwater/model1.dae'></a-asset-item>
              <a-asset-item id='bubble' src='https://teamoculus.github.io/theater/src/assets/models/underwater/model5.dae'></a-asset-item>
              <a-asset-item id='shark' src='https://teamoculus.github.io/theater/src/assets/models/underwater/shark1.dae'></a-asset-item>
              <a-asset-item id='whale' src='https://teamoculus.github.io/theater/src/assets/models/underwater/whale.dae'></a-asset-item>
              <a-asset-item id='whale2' src='https://teamoculus.github.io/theater/src/assets/models/underwater/whale2.dae'></a-asset-item>
              <a-asset-item id='building' src='https://teamoculus.github.io/theater/src/assets/models/underwater/building1.dae'></a-asset-item>
              <a-asset-item id='seaweed' src='https://teamoculus.github.io/theater/src/assets/models/underwater/seaweed.dae'></a-asset-item>
              <a-asset-item id='building2' src='https://teamoculus.github.io/theater/src/assets/models/underwater/building2.dae'></a-asset-item>
              <a-asset-item id='building3' src='https://teamoculus.github.io/theater/src/assets/models/underwater/building3.dae'></a-asset-item>
              <a-asset-item id='building4' src='https://teamoculus.github.io/theater/src/assets/models/underwater/building4.dae'></a-asset-item>
              <a-asset-item id='building5' src='https://teamoculus.github.io/theater/src/assets/models/underwater/building5.dae'></a-asset-item>
              <a-asset-item id='coral' src='https://teamoculus.github.io/theater/src/assets/models/underwater/coral.dae'></a-asset-item>
              <a-asset-item id='fish1' src='https://teamoculus.github.io/theater/src/assets/models/underwater/fish1.dae'></a-asset-item>
              <a-asset-item id='portal' src='https://teamoculus.github.io/theater/src/assets/models/underwater/portal.dae'></a-asset-item>
              <a-asset-item id='wartortle' src='https://teamoculus.github.io/theater/src/assets/models/underwater/wartortle.dae'></a-asset-item>
            </a-assets>
     
            <a-entity collada-model="#background" position="0 0 0"></a-entity>
            <a-entity id="whale-anim" collada-model='#whale2' scale="20 20 20" position="70 5 -45" rotation="0 0 -15">
              <a-animation attribute="position" from="70 5 -50" to="-5 5 -50" repeat="indefinite" direction="alternate" dur="25000"></a-animation>
            </a-entity>
            <a-entity id="shark-anim"collada-model='#shark' scale="1 1 1"position="10 2 15" sound="src: #jaws; autoplay: false; on: click">
              <a-animation attribute="position" from="10 2 15" to="50 2 15"repeat="indefinite" direction="alternate" dur="25000"></a-animation>
            </a-entity>
            <a-entity id="wartortle2"collada-model='#wartortle' scale="7 7 7"position="-20 0 20" rotation="90 180 0"></a-entity>
            <a-entity collada-model='#coral' scale="1 1 1"position="5 0 30"></a-entity>
            <a-entity collada-model='#building' scale="2 2 2"position="-25 0 -40"></a-entity>
            <a-entity collada-model='#building2' scale="2 2 2"position="-25 0 -10"></a-entity>
            <a-entity collada-model='#building3' scale="3 3 3"position="37 0 -30"></a-entity>
            <a-entity collada-model='#building4' scale="2 2 2"position="0 5 -15" rotation="0 300 90"></a-entity>
            <a-entity collada-model='#building5' scale="0.15 0.15 0.15"position="90 0 20"></a-entity>
            <a-entity collada-model='#portal' scale="2 2 2"position="-27 20 18">
              <a-animation attribute="position" from="-27 20 18" to="-27 17 18" fill="forwards" dur="1000" repeat="indefinite" direction="alternate"></a-animation>
            </a-entity>



            {seaweed}
            {coral}
            {this.state.bubble}
            


         

            <a-entity position="1.54 13.71 -123.7" rotation="0 180 0">

              <a-camera wasd-controls="fly: true; acceleration: 150">
                <a-cursor color="black" fuse="true" fuse-timeout="1000">
                  <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="1000"></a-animation>
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
    this.reversedir1();
    let goHomePointer = this.goHome;
    document.querySelector('#wartortle2').addEventListener('click', function() {
      console.log('I was clicked!');
      goHomePointer();
    });
  }
    reversedir1() {
    let reversedir2Pointer = this.reversedir2;
    setTimeout(function() {
      document.getElementById("whale-anim").setAttribute("rotation", "0 180 0");
      document.getElementById("shark-anim").setAttribute("rotation", "0 180 0");
      reversedir2Pointer();
    }, 25000);
  }
  reversedir2() {
    let reversedir1Pointer = this.reversedir1;
    setTimeout(function() {
      document.getElementById("whale-anim").setAttribute("rotation", "0 360 0");
      document.getElementById("shark-anim").setAttribute("rotation", "0 360 0");
      reversedir1Pointer();
    }, 25000);
  }
  goHome() {
    this.context.router.push("/");
  }
}

export default Underwater;