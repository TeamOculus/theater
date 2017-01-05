import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class City extends React.Component {

  constructor() {
    super();
    this.state = {};
    this.goToHome = this.goToHome.bind(this);
  }

  render(){
    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            <img id="sky" src="http://localhost:8080/src/assets/imgs/city/city-bg.jpg" />

            <a-asset-item id="glass-tower" src="http://localhost:8080/src/assets/models/city/glass-tower.dae" />
            <a-asset-item id="waldo" src="http://localhost:8080/src/assets/models/city/waldo.dae" />
            <a-asset-item id="crowd1" src="http://localhost:8080/src/assets/models/city/crowd.dae" />
            <a-asset-item id="crowd2" src="http://localhost:8080/src/assets/models/city/crowd.dae" />
            <a-asset-item id="crowd3" src="http://localhost:8080/src/assets/models/city/crowd.dae" />
            <a-asset-item id="crowd4" src="http://localhost:8080/src/assets/models/city/crowd.dae" />
            <a-asset-item id="future-city" src="http://localhost:8080/src/assets/models/city/future-city/future-city.dae" />
            <a-asset-item id="park2" src="http://localhost:8080/src/assets/models/city/park2/park2.dae" />

            <img id="ground" src="http://localhost:8080/src/assets/imgs/city/grass.jpg" />
          </a-assets>

          <a-sky src="#sky" rotation="0 0 0"></a-sky>
          <a-entity collada-model="#waldo" position="-5 0 -3"></a-entity>

          <a-entity collada-model="#crowd1" position="-7 -1 -1.5"></a-entity>
          <a-entity collada-model="#crowd2" position="13.82 -1 9.66"></a-entity>
          <a-entity collada-model="#crowd3" position="-7.49 -1 9.63"></a-entity>
          <a-entity collada-model="#crowd4" position="14.77 -1 -1.45"></a-entity>
          
          {/*<<a-entity collada-model="#future-city" position="-228 0 195"></a-entity>*/}

          <a-entity collada-model="#park2" position="29.15 0 26.77"></a-entity>

          <a-camera position="0 0 0" wasd-controls="fly: true">
            {/*<a-cursor color="yellow" fuse="true" fuse-timeout="3000">
              <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
            </a-cursor>*/}
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

    document.querySelector('#waldo').addEventListener('click', function () {
      console.log('I was clicked!');
      goToHomePointer();
    });
  }

  goToHome() {
    this.context.router.push("home")
  }

  
}

export default City;