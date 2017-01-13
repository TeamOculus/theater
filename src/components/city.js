import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class City extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.goToHome = this.goToHome.bind(this);
  }

  render(){
  //   var i = 0;
  //   var j = 0
  //   var waldo = [];
  //   let x, y, z;
  //   while(j < 1) {
  //     x = Math.random() * 56 -28;
  //     y = 0;
  //     z = Math.random() * 56 -28;
  //     waldo.push(<a-entity key={j} collada-model="#waldo" position={`${x} ${y} ${z}`}></a-entity> );
  //     j++;
  //   }
    
  //   setTimeout(function() {

  //   }, 1000)

    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            <img id="sky" src="/src/assets/imgs/city/city-bg.jpg" />

            <a-asset-item id="crowd1" src="/src/assets/models/city/crowd.dae" />
            <a-asset-item id="crowd2" src="/src/assets/models/city/crowd.dae" />
            <a-asset-item id="crowd3" src="/src/assets/models/city/crowd.dae" />
            <a-asset-item id="crowd4" src="/src/assets/models/city/crowd.dae" />
            <a-asset-item id="waldo" src="/src/assets/models/city/waldo.dae" />
            <a-asset-item id="park2" src="/src/assets/models/city/park2/park2.dae" />

            <audio id="city-ambience" src="/src/assets/sounds/city-sounds/city-park-ambience.mp3" loop="true" volume="4" autoPlay="true" preload></audio>
            <audio id="fountain" src="/src/assets/sounds/city-sounds/fountain.mp3"></audio>
            <audio id="good-result" src="/src/assets/sounds/city-sounds/good-result.mp3"></audio>

          </a-assets>

          <a-sky src="#sky" rotation="0 0 0"></a-sky>
          <a-plane color="#CCC" height="7" width="60" position="-.67 16.5 -35.35"></a-plane>
          <a-entity bmfont-text="text: Can you find Waldo?; color: #4a6ee3" position="-26.91 15 -34.63" scale="30 30 30"></a-entity>

          <a-entity collada-model="#crowd1" position="-7 -1 -1.5"></a-entity>
          <a-entity collada-model="#crowd2" position="13.82 -1 9.66"></a-entity>
          <a-entity collada-model="#crowd3" position="-7.49 -1 9.63"></a-entity>
          <a-entity collada-model="#crowd4" position="14.77 -1 -1.45"></a-entity>
          {<a-entity id="waldo-model" collada-model="#waldo" position="-10 0 -3" sound="src: #good-result; autoplay: false; on: click"></a-entity>}
          {/*waldo*/}

          <a-entity collada-model="#park2" position="29.15 0 26.77"></a-entity>
          <a-sound src="#fountain" autoplay="true" position="-1.75 0 13.11" loop="true" volume="2"></a-sound>

          <a-camera position="0 0 0" wasd-controls="fly: false">
            <a-cursor color="yellow" fuse="true" fuse-timeout="3000">
              <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
            </a-cursor>
          </a-camera>
        </a-scene>

      </div>
    )
  }

    static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    let goToHomePointer = this.goToHome;

    document.querySelector('#waldo-model').addEventListener('click', function () {
      console.log('I was clicked!');
      goToHomePointer();
    });
  }

  goToHome() {
    this.context.router.push("/")
  }
  
}

export default City;