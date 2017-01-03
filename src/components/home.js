import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.goToTheater = this.goToTheater.bind(this);
  }

  render() {
    return (
      <div className="show-vr-div">
        <a-scene>
          <a-assets>
            <img id="theaterlink" src="http://localhost:8080/src/assets/models/theater/theaterlink.jpg" />
          </a-assets>

          <a-plane id="theaterlink2" src="#theaterlink" height="10" width="10" position="0 0 -10"></a-plane>

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
    document.querySelector('#theaterlink2').addEventListener('click', function () {
      console.log('I was clicked!');
      goToTheaterPointer();
    });
  }

  goToTheater() {
    this.context.router.push("theater")
  }
}

export default Home;