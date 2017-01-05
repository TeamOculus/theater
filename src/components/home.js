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

          <a-entity bmfont-text="text: HELLO!; color: #333" position="0 0 -5" scale="10 10 10"></a-entity>

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