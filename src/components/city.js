import React from 'react';

class City extends React.Component {
  render(){
    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            <img id="sky" src="http://localhost:8080/src/assets/imgs/city/city-bg.jpg" />
            <a-asset-item id="tower" src="http://localhost:8080/src/assets/models/city/al+hamra+2/model.dae" />
            <a-asset-item id="waldo" src="http://localhost:8080/src/assets/models/city/waldo.dae" />
          </a-assets>

          <a-sky src="#sky"></a-sky>
          <a-entity collada-model="#tower" position="0 0 0"></a-entity>
          <a-entity collada-model="#waldo" position="10 0 0"></a-entity>

          {/*<a-camera position="0 0 0">
            <a-cursor color="yellow" fuse="true" fuse-timeout="3000">
              <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
            </a-cursor>
          </a-camera>*/}
        </a-scene>

      </div>
    )
  }

  
}

export default City;