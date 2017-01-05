import React from 'react';

class Space extends React.Component {
  constructor() {
    super();
    this.state = {
      xwingdir: true,
      directionflag: 0
    };
    this.reversedir1 = this.reversedir1.bind(this)
    this.reversedir2 = this.reversedir2.bind(this)
  }

  componentDidMount(){
    this.reversedir1();
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

  render(){

    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            <img id="spaceTexture" src="http://localhost:8080/src/assets/models/space/space-background.jpg"/>
            <img id="zeuseus" src="http://localhost:8080/src/assets/models/space/zeuseus/model/zeus.jpg"/>
            <img id="sun" src="http://localhost:8080/src/assets/models/space/sun/model/material1.jpg"/>
            <img id="mercury" src="http://localhost:8080/src/assets/models/space/mercury/material3.jpg"/>
            <img id="venus" src="http://localhost:8080/src/assets/models/space/venus/model/venusmap.jpg"/>
            <img id="earth" src="http://localhost:8080/src/assets/models/space/earth/model/material1.jpg"/>
            <img id="moon" src="http://localhost:8080/src/assets/models/space/moon/material2.jpg"/>
            <img id="mars" src="http://localhost:8080/src/assets/models/space/mars/material12.jpg"/>
            <img id="jupiter" src="http://localhost:8080/src/assets/models/space/jupiter/jupiter2.jpg"/>
            <img id="saturn" src="http://localhost:8080/src/assets/models/space/saturn/model/material6.jpg"/>
            <img id="saturnrings" src="http://localhost:8080/src/assets/models/space/saturn/model/saturn-rings.png"/>
            <img id="neptune" src="http://localhost:8080/src/assets/models/space/neptune/material1.jpg"/>
            <img id="uranus" src="http://localhost:8080/src/assets/models/space/uranus/model/material1.jpg"/>
            <img id="pluto" src="http://localhost:8080/src/assets/models/space/pluto/material_2.png"/>
            <img id="arrow" src="http://localhost:8080/src/assets/models/space/down-arrow-black.png"/>
            <audio id="sound" src="http://localhost:8080/src/assets/models/space/music/starwars.mp3"></audio>
            <a-asset-item id="stargate" src="http://localhost:8080/src/assets/models/space/stargate/model.dae"></a-asset-item>
            <a-asset-item id="xwing" src="http://localhost:8080/src/assets/models/space/xwing/model.dae"></a-asset-item>
            <a-asset-item id="milleniumfalcon" src="http://localhost:8080/src/assets/models/space/milleniumfalcon/model.dae"></a-asset-item>


            {/*<a-asset-item id="milkyway" src="http://localhost:8080/src/assets/models/space/milkyway/model.dae"></a-asset-item>
            <a-asset-item id="earth" src="http://localhost:8080/src/assets/models/space/earth/earth.dae"></a-asset-item>
            <a-asset-item id="saturn" src="http://localhost:8080/src/assets/models/space/saturn/model.dae"></a-asset-item>
            <a-asset-item id="uranus" src="http://localhost:8080/src/assets/models/space/uranus/model.dae"></a-asset-item>
            <a-asset-item id="sun" src="http://localhost:8080/src/assets/models/space/sun/model.dae"></a-asset-item>

            <a-asset-item id="enterprise1" src="http://localhost:8080/src/assets/models/space/enterprise1/model.dae"></a-asset-item>
            */}
          </a-assets>

          <a-sky src="#spaceTexture"></a-sky>
          {/*<a-entity collada-model="#sun" position="5 0 0" scale="1 1 1">
             
          </a-entity>
          <a-entity collada-model="#earth" position="15 0 0" sound="src: #sound; autoplay: false" look-at="#camera">
             <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-entity>*/}
          <a-sphere src="#zeuseus" radius="1" translate="0 1 0" position="-30 1 0">
            <a-animation attribute="rotation" dur="20000" direction="reverse" fill="backwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          
          {/*<a-image src="#arrow" position="0 20 0"></a-image>*/}
          
          <a-sphere src="#sun" radius="14" translate="0 1 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-entity bmfont-text="text: Sun; color: red" position="-1.95 15.68 0" scale="10 10 10"></a-entity>

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

          <a-sphere src="#saturn" radius="2.5" translate="0 1 0" position="115 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          <a-ring src="#saturnrings" position="114.5 0 0" radius-inner="6" radius-outer="8" rotation="75 -50 0">
          </a-ring>
          <a-ring src="#saturnrings" position="114.5 0 0" radius-inner="6" radius-outer="8" rotation="-105 -50 10">
          </a-ring>
          
          <a-sphere src="#neptune" radius="2" translate="0 1 0" position="135 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>

          <a-sphere src="#uranus" radius="2" translate="0 1 0" position="155 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>

          <a-sphere src="#pluto" radius="0.5" translate="0 1 0" position="185 0 0">
            <a-animation attribute="rotation" dur="20000" fill="forwards" from="0 0 0" to="0 360 0" repeat="indefinite"></a-animation>
          </a-sphere>
          
          <a-entity collada-model="#stargate" position="20 20 0"></a-entity>
          
          <a-entity id="xwing-anim" collada-model="#xwing" position="0 -70 20" rotation="0 270 0" sound="src: #sound; autoplay: false">
            <a-animation attribute="position" dur="20000" from="-150 -70 20" to="200 -70 20" direction="alternate" repeat="indefinite">
            </a-animation>
          </a-entity>
          {/*
          <a-entity collada-model="#milleniumfalcon" position="0 20 20" rotation="0 270 0">
            <a-animation attribute="position" dur="20000" from="200 20 -20" to="-150 -20 -20" direction="alternate" repeat="indefinite">
            </a-animation>
          </a-entity>
          */}
          
          <a-entity position="30 -1.5 40">
            <a-camera id="camera" look-controls wasd-controls="acceleration: 300; fly: true"></a-camera>
          </a-entity>
        </a-scene>
        
          {/*<a-entity collada-model="#saturn" position="90 0 -50" rotation="0 0 5" scale="1 1 0.7">
            <a-animation attribute="rotation"
               dur="50000"
               fill="forwards"
               to="0 360 0"
               repeat="indefinite"></a-animation>
          </a-entity>
          <a-entity collada-model="#uranus" position="-240 10 -375" scale="15 15 15">
            <a-animation attribute="rotation"
               dur="50000"
               fill="forwards"
               to="0 360 0"
               repeat="indefinite"></a-animation>
          </a-entity>*/}


          {/*<a-entity collada-model="#enterprise1" position="-10 -90 -100" rotation="0 180 0" scale="1 1 0.8"></a-entity>*/}
         
      </div>
    )
  }

  
}

export default Space;