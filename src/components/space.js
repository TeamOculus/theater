import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Space extends React.Component {
  constructor() {
    super();
    this.state = {
      xwingdir: true,
      directionflag: 0
    };
    this.goHome = this.goHome.bind(this)
    this.reversedir1 = this.reversedir1.bind(this)
    this.reversedir2 = this.reversedir2.bind(this)
    this.dragonturn1 = this.dragonturn1.bind(this)
    this.dragonturn2 = this.dragonturn2.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object
  }
  componentDidMount(){
    this.reversedir1();
    this.dragonturn1();

    let goHomePointer = this.goHome;
    document.querySelector('#exit').addEventListener('click', function () {
      console.log('I was clicked!');
      goHomePointer();
    });
  }

  goHome() {
    this.context.router.push("/")
  }

  reversedir1() {
    let reversedir2Pointer = this.reversedir2;
    setTimeout(function() {
      document.getElementById("xwing-anim").setAttribute("rotation", "0 90 0");
      reversedir2Pointer();
    }, 20000);
  }
  reversedir2() {
    let reversedir1Pointer = this.reversedir1;
    setTimeout(function() {
      document.getElementById("xwing-anim").setAttribute("rotation", "0 270 0");
      reversedir1Pointer();
    }, 20000);
  }

  dragonturn1() {
    let dragonturn2Pointer = this.dragonturn2;
    setTimeout(function() {
      document.getElementById("spacexdragon-turn").setAttribute("rotation", "0 180 0");
      dragonturn2Pointer();
    }, 20000);
  }
  dragonturn2() {
    let dragonturn1Pointer = this.dragonturn1;
    setTimeout(function() {
      document.getElementById("spacexdragon-turn").setAttribute("rotation", "0 360 0");
      dragonturn1Pointer();
    }, 20000);
  }



  render(){

    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            <img id="spaceTexture" src="/src/assets/models/space/space-background.jpg"/>
            <img id="zeuseus" src="/src/assets/models/space/zeuseus/model/zeus.jpg"/>
            <img id="sun" src="/src/assets/models/space/sun/model/material1.jpg"/>
            <img id="mercury" src="/src/assets/models/space/mercury/material3.jpg"/>
            <img id="venus" src="/src/assets/models/space/venus/model/venusmap.jpg"/>
            <img id="earth" src="/src/assets/models/space/earth/model/material1.jpg"/>
            <img id="moon" src="/src/assets/models/space/moon/material2.jpg"/>
            <img id="mars" src="/src/assets/models/space/mars/material12.jpg"/>
            <img id="jupiter" src="/src/assets/models/space/jupiter/jupiter2.jpg"/>
            <img id="saturn" src="/src/assets/models/space/saturn/model/material6.jpg"/>
            <img id="saturnrings" src="/src/assets/models/space/saturn/model/saturn-rings.png"/>
            <img id="neptune" src="/src/assets/models/space/neptune/material1.jpg"/>
            <img id="uranus" src="/src/assets/models/space/uranus/model/material1.jpg"/>
            <img id="pluto" src="/src/assets/models/space/pluto/material2.jpg"/>
            <img id="arrow" src="/src/assets/models/space/down-arrow-black.png"/>
            <audio id="sound" src="/src/assets/models/space/music/starwars.mp3"></audio>
            <a-asset-item id="stargate" src="/src/assets/models/space/stargate/model.dae"></a-asset-item>
            <a-asset-item id="tardis" src="/src/assets/models/space/tardis/model.dae"></a-asset-item>
            <a-asset-item id="deathstar" src="/src/assets/models/space/deathstar/model.dae"></a-asset-item>
            <a-asset-item id="imperialfighter" src="/src/assets/models/space/imperialfighter/model.dae"></a-asset-item>
            <a-asset-item id="xwing" src="/src/assets/models/space/xwing/model.dae"></a-asset-item>
            <a-asset-item id="milleniumfalcon" src="/src/assets/models/space/milleniumfalcon/model.dae"></a-asset-item>
            <a-asset-item id="spacexdragon" src="/src/assets/models/space/spacexdragon/model.dae"></a-asset-item>
            <a-asset-item id="spacestation" src="/src/assets/models/space/spacestation/model.dae"></a-asset-item>


            {/*
            <a-asset-item id="enterprise1" src="/src/assets/models/space/enterprise1/model.dae"></a-asset-item>
            */}
          </a-assets>

          <a-sky src="#spaceTexture"></a-sky>
         
          {/*<a-sphere src="#zeuseus" radius="1" translate="0 1 0" position="-30 1 0">
            <a-animation attribute="rotation" dur="20000" direction="reverse" fill="backwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>*/}
          
          <a-sphere src="#sun" radius="14" translate="0 1 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Sun; color: red" position="-4 16.5 0" scale="10 10 10"></a-entity>

          <a-sphere src="#mercury" radius="0.5" translate="0 1 0" position="20 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Mercury; color: red" position="18.47 1.4 0" scale="5 5 5"></a-entity>

          <a-sphere src="#venus" radius="0.7" translate="0 1 0" position="25 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Venus; color: red" position="24 1.4 0" scale="5 5 5"></a-entity>

          <a-sphere src="#earth" radius="1.5" translate="0 1 0" position="32 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Earth; color: red" position="30.75 2.4 0" scale="5 5 5"></a-entity>

          <a-sphere src="#moon" radius="0.2" translate="0 1 0" position="34.5 1 0">
            <a-animation attribute="rotation" dur="20000" direction="reverse" fill="backwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>

          <a-sphere src="#mars" radius="1.2" translate="0 1 0" position="40 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Mars; color: red" position="39 2 0" scale="5 5 5"></a-entity>

          <a-sphere src="#jupiter" radius="7" translate="0 1 0" position="85 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Jupiter; color: red" position="82 9 0" scale="5 5 5"></a-entity>

          <a-sphere src="#saturn" radius="2.5" translate="0 1 0" position="115 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-ring src="#saturnrings" position="114.5 0 0" radius-inner="6" radius-outer="8" rotation="75 -50 0">
          </a-ring>
          <a-ring src="#saturnrings" position="114.5 0 0" radius-inner="6" radius-outer="8" rotation="-105 -50 10">
          </a-ring>
          <a-entity bmfont-text="text: Saturn; color: red" position="113 5 0" scale="5 5 5"></a-entity>
          

          <a-sphere src="#uranus" radius="2" translate="0 1 0" position="135 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Uranus; color: red" position="133.5 4 0" scale="5 5 5"></a-entity>

          <a-sphere src="#neptune" radius="2" translate="0 1 0" position="155 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Neptune; color: red" position="153.5 4 0" scale="5 5 5"></a-entity>

          <a-sphere src="#pluto" radius="0.5" translate="0 1 0" position="185 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Pluto; color: red" position="184 2.5 0" scale="5 5 5"></a-entity>
          
          <a-entity id="exit" collada-model="#stargate" position="-50 20 40" rotation="0 90 0"></a-entity>

          <a-entity id="tardis" collada-model="#tardis" position="-20 0 -20">
            <a-animation attribute="rotation" dur="2000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-entity>

          <a-entity id="deathstar" collada-model="#deathstar" position="50 20 60" scale="0.03 0.03 0.03">
          </a-entity>

          <a-entity id="imperialfighter" collada-model="#imperialfighter" position="50 0 60" rotation="45 0 0">
            <a-animation attribute="position" dur="7000" from="50 11 54" to="50 0 54" direction="alternate" repeat="indefinite">
            </a-animation>
          </a-entity>
          
          <a-entity id="xwing-anim" collada-model="#xwing" position="0 -70 20" rotation="0 270 0" sound="src: #sound; autoplay: true; volume: 10" scale="0.8 0.8 0.8">
            <a-animation attribute="position" dur="20000" from="-150 -50 20" to="200 -50 20" direction="alternate" repeat="indefinite">
            </a-animation>
          </a-entity>

          <a-entity id="spacexdragon-turn" collada-model="#spacexdragon" position="32.6 0.77 -2" scale="0.03 0.03 0.03">
            <a-animation attribute="position" dur="10000" from="32.6 0.77 -2" to="32.6 0.2 -1" direction="alternate" repeat="indefinite"></a-animation>
          </a-entity>

          <a-entity id="spacestation" collada-model="#spacestation" position="32 1 -2" scale="0.01 0.01 0.01">
          </a-entity>

          
          {/*<a-entity collada-model="#milleniumfalcon" position="0 20 20" rotation="0 270 0" scale="0.5 0.5 0.5">
            <a-animation attribute="position" dur="20000" from="200 20 -20" to="-150 -20 -20" direction="alternate" repeat="indefinite">
            </a-animation>
          </a-entity>*/}
          
          
          <a-entity position="30 -1.5 40">
            <a-camera id="camera" look-controls wasd-controls="acceleration: 250; fly: true">
              <a-cursor color="yellow" fuse="true" fuse-timeout="3000">
                <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
              </a-cursor>
            </a-camera>
          </a-entity>
        </a-scene>
        
        


          {/*<a-entity collada-model="#enterprise1" position="-10 -90 -100" rotation="0 180 0" scale="1 1 0.8"></a-entity>*/}
         
      </div>
    )
  }
  
}

export default Space;