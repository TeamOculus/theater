import React from 'react';

class Underwater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: []
    }
  }
  componentWillMount() {
     var i = 0;
     while(i < 500) {
      let x = Math.random() * 100 - 50;
      let y = Math.random() * 10;
      let z = Math.random() * 100 - 50;
      let bubble = this.state.bubble;
      bubble.push(<a-entity key={i} collada-model="#bubble" position={`${x} ${y} ${z}`} scale = "0.01 0.01 0.01"><a-animation attribute="position" to={`${x + Math.random() * 2 - 1} ${y + 5} ${z}`} dur={`${Math.random() * 12000}`} begin="4000" repeat="indefinite"></a-animation>
          </a-entity>);
       i++;
     }


  }
  render(){
      var j = 0
      var seaweed = [];

      let x, y, z;
      while(j < 200) {
        x = Math.random() * 100 -50;
        y = 0;
        z = Math.random() * 100 -50;
        seaweed.push(<a-entity key={j} collada-model="#seaweed" position={`${x} ${y} ${z}`}></a-entity> );
        j++;
      }
    

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
            <a-entity collada-model='#whale' scale="1 1 1"position="30 3 -50">
              <a-animation attribute="position" from="10 5 -50" to="150 5 -50" repeat="indefinite" direction="alternate-reverse" dur="30000"></a-animation> 
            </a-entity>
            <a-entity collada-model='#shark' scale="1 1 1"position="50 2 15">
              <a-animation attribute="position" from="70 2 15" to="10 2 15" repeat="indefinite" direction="alternate-reverse" dur="30000"></a-animation>
              
            </a-entity>
           
            <a-entity collada-model='#plant1' scale="1 1 1"position="10 0 10"></a-entity>
            <a-entity collada-model='#wartortle' scale="7 7 7"position="-20 0 20" rotation="90 180 0"></a-entity>
           
         
            {seaweed}
            {this.state.bubble}
            <a-entity>
              <a-camera wasd-controls="fly: true; acceleration: 150"></a-camera>
            </a-entity>
           


            

        </a-scene>

      </div>
    )
  }

  
}

export default Underwater;