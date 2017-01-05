import React from 'react';

class Underwater extends React.Component {
  render(){
      var i = 0;
      var j = 0
      var bubble = [];
      var seaweed = [];
      let x, y, z;
      while(j < 1) {
        x = Math.random() * 120 -60;
        y = 0;
        z = Math.random() * 120 -60;
        seaweed.push(<a-entity key={j} collada-model="#seaweed" position={`${x} ${y} ${z}`}></a-entity> );
        j++;
      }
      
      while(i < 1) {
        x = Math.random() * 12 - 6;
        y = Math.random() * 10;
        z = Math.random() * 12 - 6;
        bubble.push(<a-entity key={i} collada-model="#bubble" position={`${x} ${y} ${z}`} scale = "0.01 0.01 0.01"><a-animation attribute="position" to={`${x + Math.random() * 2 - 1} ${y + 5} ${z}`} dur="5000" begin="1" repeat="indefinite"></a-animation>
            </a-entity>);
        
        i++;
      }
      setTimeout(function() {

      }, 1000)
    return (
      <div className="show-vr-div">
        <a-scene>
        
            <a-assets>
              <a-asset-item id='background' src='http://localhost:8080/src/assets/models/underwater/model1.dae'></a-asset-item>
              <a-asset-item id='bubble' src='http://localhost:8080/src/assets/models/underwater/model5.dae'></a-asset-item>
              <a-asset-item id='shark' src='http://localhost:8080/src/assets/models/underwater/shark1.dae'></a-asset-item>
              <a-asset-item id='whale' src='http://localhost:8080/src/assets/models/underwater/whale.dae'></a-asset-item>
     
              <a-asset-item id='plant1' src='http://localhost:8080/src/assets/models/underwater/plant1.dae'></a-asset-item>
              <a-asset-item id='seaweed' src='http://localhost:8080/src/assets/models/underwater/seaweed.dae'></a-asset-item>
              <a-asset-item id='wartortle' src='http://localhost:8080/src/assets/models/underwater/wartortle.dae'></a-asset-item>
            </a-assets>

            <a-entity collada-model="#background" position="0 0 0"></a-entity>
             <a-entity collada-model='#whale' scale="1 1 1"position="30 3 -50"></a-entity>
            <a-entity collada-model='#shark' scale="1 1 1"position="50 2 15"></a-entity>
            <a-entity collada-model='#orca' scale="10 10 10"position="50 2 15"></a-entity>
            <a-entity collada-model='#plant1' scale="1 1 1"position="10 0 10"></a-entity>
            <a-entity collada-model='#wartortle' scale="7 7 7"position="-20 0 20" rotation="90 180 0"></a-entity>
           
         

            {seaweed}
            {bubble}
          


            

        </a-scene>

      </div>
    )
  }

  
}

export default Underwater;