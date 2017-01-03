import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.goToTheater = this.goToTheater.bind(this);
    this.goToSpace = this.goToSpace.bind(this);
    this.goToEightbit = this.goToEightbit.bind(this);
    this.goToCity = this.goToCity.bind(this);
    this.goToUnderwater = this.goToUnderwater.bind(this);
  }

  render() {
    return (
      <div className="show-vr-div">
        <a-scene>
          <a-assets>
            <img id="theaterlink" src="http://localhost:8080/src/assets/models/theater/theaterlink.jpg" />
            <img id="spacelink" src="http://localhost:8080/src/assets/models/space/spacelink.jpg" />
            <img id="eightbitlink" src="http://localhost:8080/src/assets/models/eightbit/eightbitlink.jpg" />
            <img id="citylink" src="http://localhost:8080/src/assets/models/city/citylink.jpg" />
            <img id="underwaterlink" src="http://localhost:8080/src/assets/models/underwater/underwaterlink.jpg" />
            
          </a-assets>

          <a-plane id="theaterlink2" src="#theaterlink" height="5" width="10" position="-15 0 -20"></a-plane>
          <a-plane id="spacelink2" src="#spacelink" height="5" width="10" position="15 0 -20"></a-plane>
          <a-plane id="eightbitlink2" src="#eightbitlink" height="5" width="10" position="-15 15 -20"></a-plane>
          <a-plane id="citylink2" src="#citylink" height="5" width="10" position="15 15 -20"></a-plane>
          <a-plane id="underwaterlink2" src="#underwaterlink" height="5" width="10" position="0 10 -20"></a-plane>


          <a-entity position="0 1.8 4">
            <a-entity camera="" look-controls="" mouse-cursor="">
              <a-entity id="cursor" position="0 0 -1" geometry="primitive: ring; radiusOuter: 0.016; radiusInner: 0.01" material="color: #FFF;" cursor="fuse: true; maxDistance: 8">
                <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="1500"></a-animation>
              </a-entity>
            </a-entity>
          </a-entity>


        </a-scene>
      </div>
    )
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    let goToTheaterPointer = this.goToTheater;
    let goToSpacePointer = this.goToSpace;
    let goToEightbitPointer = this.goToEightbit;
    let goToCityPointer = this.goToCity;
    let goToUnderwaterPointer = this.goToUnderwater;
    document.querySelector('#theaterlink2').addEventListener('click', function () {
      console.log('I was clicked!');
      goToTheaterPointer();
    });
    document.querySelector('#spacelink2').addEventListener('click', function () {
      console.log('I was clicked!');
      goToSpacePointer();
    });
    document.querySelector('#eightbitlink2').addEventListener('click', function () {
      console.log('I was clicked!');
      goToEightbitPointer();
    });
    document.querySelector('#citylink2').addEventListener('click', function () {
      console.log('I was clicked!');
      goToCityPointer();
    });
    document.querySelector('#underwaterlink2').addEventListener('click', function () {
      console.log('I was clicked!');
      goToUnderwaterPointer();
    });
  }

  goToTheater() {
    this.context.router.push("theater")
  }
  goToSpace() {
    this.context.router.push("space")
  }
  goToEightbit() {
    this.context.router.push("eightbit")
  }
  goToCity() {
    this.context.router.push("city")
  }
  goToUnderwater() {
    this.context.router.push("underwater")
  }
}

export default Home;