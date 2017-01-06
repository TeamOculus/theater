import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Underwater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: [],
      directiongflag: 0

    }
    this.goHome = this.goHome.bind(this);
    this.reversedir1 = this.reversedir1.bind(this)
    this.reversedir2 = this.reversedir2.bind(this)
  }
  componentWillMount() {
     var i = 0;
     while(i < 300) {
      let x = Math.random() * 80 - 40;
      let y = Math.random() * 10;
      let z = Math.random() * 80 - 40;
      let bubble = this.state.bubble;
      bubble.push(<a-entity key={i} collada-model="#bubble" position={`${x} ${y} ${z}`} scale = "0.01 0.01 0.01"><a-animation attribute="position" to={`${x + Math.random() * 2 - 1} ${y + 5} ${z}`} dur={`${Math.random() * 12000}`} begin="3000" repeat="indefinite"></a-animation>
          </a-entity>);
       i++;
     }


  }
  render(){
      var j = 0
      var seaweed = [];

      let x, y, z;
      while(j < 100) {
        x = Math.random() * 60 -30;
        y = 0;
        z = Math.random() * 60 -30;
        seaweed.push(<a-entity key={j} collada-model="#seaweed" position={`${x} ${y} ${z}`}></a-entity> );
        j++;
      }
    

    return (
      <div className="show-vr-div">
        <a-scene>
        
            <a-assets>
              <audio id = "jaws" src = "http://localhost:8080/src/assets/sounds/jaws.mp3"></audio>
              <img id="exit-blue" src="http://localhost:8080/src/assets/imgs/theaterexit.png" />
              <a-asset-item id='background' src='http://localhost:8080/src/assets/models/underwater/model1.dae'></a-asset-item>
              <a-asset-item id='bubble' src='http://localhost:8080/src/assets/models/underwater/model5.dae'></a-asset-item>
              <a-asset-item id='shark' src='http://localhost:8080/src/assets/models/underwater/shark1.dae'></a-asset-item>
              <a-asset-item id='whale' src='http://localhost:8080/src/assets/models/underwater/whale.dae'></a-asset-item>
              <a-asset-item id='whale2' src='http://localhost:8080/src/assets/models/underwater/whale2.dae'></a-asset-item>
              <a-asset-item id='seaweed' src='http://localhost:8080/src/assets/models/underwater/seaweed.dae'></a-asset-item>
              <a-asset-item id='wartortle' src='http://localhost:8080/src/assets/models/underwater/wartortle.dae'></a-asset-item>
            </a-assets>

            <a-entity collada-model="#background" position="0 0 0"></a-entity>

            <a-entity id="whale-anim" collada-model='#whale2' scale="20 20 20" position="70 5 -50" rotation="0 0 -15">
              <a-animation attribute="position" from="70 5 -50" to="-5 5 -50" repeat="indefinite" direction="alternate" dur="20000"></a-animation>
            </a-entity>



            <a-entity id="shark-anim"collada-model='#shark' scale="1 1 1"position="10 2 15" sound="src: #jaws; autoplay: false; on: click">
              <a-animation attribute="position" from="10 2 15" to="50 2 15"repeat="indefinite" direction="alternate" dur="20000"></a-animation>
              <a-sound></a-sound>
              
            </a-entity>
           

            <a-entity id="wartortle2"collada-model='#wartortle' scale="7 7 7"position="-20 0 20" rotation="90 180 0"></a-entity>
           
         
            {seaweed}
            {this.state.bubble}

            <a-image src="#exit-blue" height="15" width="20" color="blue" position="-20 30 15" rotation="0 180 0"></a-image>
            <a-entity>
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
      document.getElementById("whale-anim")
      .setAttribute("rotation", "0 180 0");

      document.getElementById("shark-anim")
      .setAttribute("rotation", "0 180 0");
      reversedir2Pointer();
    }, 20000);
  }
  reversedir2() {
    let reversedir1Pointer = this.reversedir1;
    setTimeout(function() {
      document.getElementById("whale-anim").setAttribute("rotation", "0 360 0");

      document.getElementById("shark-anim").setAttribute("rotation", "0 360 0");
      reversedir1Pointer();
    }, 20000);
  }
  goHome() {
    this.context.router.push("/");
  }
}

export default Underwater;