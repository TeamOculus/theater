import React from 'react';

class Underwater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">

        <a-scene>
            <a-assets>
              <a-asset-item id='background' src='http://localhost:8080/src/assets/models/underwater/model1.dae'></a-asset-item>
            </a-assets>

            <a-entity collada-model="#background" position="0 0 0"></a-entity>

            <a-entity position="0 0 0">
              <a-camera></a-camera>
            </a-entity>
        </a-scene>

      </div>
    )
  }

  
}

export default Underwater;