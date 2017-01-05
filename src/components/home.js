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
            <video id="vidbg" autoplay loop="true" webkit-playsinline src="http://localhost:8080/src/assets/videos/discoveryitaly.mp4" />
          </a-assets>

          <a-curvedimage id="theaterlink2" src="#theaterlink" height="4.0" radius="12" theta-length="45"
                 rotation="0 70 0" scale="0.8 0.8 0.8"></a-curvedimage>
          <a-curvedimage id="spacelink2" src="#spacelink" height="4.0" radius="12" theta-length="45"
                 rotation="0 142 0" scale="0.8 0.8 0.8" ></a-curvedimage>
          <a-curvedimage id="eightbitlink2" src="#eightbitlink" height="4.0" radius="12" theta-length="45"
                 rotation="0 214 0" scale="0.8 0.8 0.8" ></a-curvedimage>
          <a-curvedimage id="citylink2" src="#citylink" height="4.0" radius="12" theta-length="45"
                 rotation="0 286 0" scale="0.8 0.8 0.8" ></a-curvedimage>
          <a-curvedimage id="underwaterlink2" src="#underwaterlink" height="4.0" radius="12" theta-length="45"
                 rotation="0 358 0" scale="0.8 0.8 0.8" ></a-curvedimage>

          <a-videosphere src="#vidbg"></a-videosphere>

<<<<<<< HEAD

=======
>>>>>>> master
          <a-entity position="-32.84 11.82 -36.12" scale="30 30 30" rotation="0 -13.02 0" bmfont-text="text: Welcome to Team Oculus' VR Demo!; color: #A1DAF2"></a-entity>

          <a-entity position="9.22 2.32 -3.63" scale="8 8 8" rotation="0 -90 0" bmfont-text="text: Theater; color: #E1AA40"></a-entity>
          <a-entity position="0.71 2.22 -9.83" scale="8 8 8" rotation="-0.22 -14.76 0" bmfont-text="text: Space; color: #E1AA40"></a-entity>
          <a-entity position="6.78 2.22 7.92" scale="8 8 8" rotation="0 201.02 0" bmfont-text="text: Underwater; color: #E1AA40"></a-entity>
          <a-entity position="-9.01 1.92 -4.21" scale="8 8 8" rotation="0 55.04 0" bmfont-text="text: 8Bit; color: #E1AA40"></a-entity>
          <a-entity position="-7.33 2.12 7.99" scale="8 8 8" rotation="0 127.5 0.18" bmfont-text="text: City; color: #E1AA40"></a-entity>


          <a-camera position="0 0 0">
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