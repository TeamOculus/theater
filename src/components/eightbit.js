import React from 'react';

class Eightbit extends React.Component {
  constructor() {
    super();
    
    this.state = {
      campos: [19, 2, -22],
      

    }
  }
  componentWillMount(){
    let statePointer = this.state;
    this.setState({
      ballpos: [statePointer.campos[0], statePointer.campos[1], statePointer.campos[2]-5]
    })
    for (let i=0; i < 100; i++) {
      setTimeout(() => {
        let ballPointer = this.state.ballpos;
        let camerapos = this.state.campos.slice();
        this.setState({campos: [ballPointer[0], ballPointer[1], ballPointer[2]], ballpos: [camerapos[0], camerapos[1], camerapos[2] - 5]})
      }, i * 600)
    }
  }
  
  render(){
    console.log(this.state)
    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            
            <a-asset-item id="peach" src="http://localhost:8080/src/assets/models/eightbit/peach/model.dae"></a-asset-item>
            <a-asset-item id="star" src="http://localhost:8080/src/assets/models/eightbit/star/model.dae"></a-asset-item>
            <a-asset-item id="fire" src="http://localhost:8080/src/assets/models/eightbit/fire/model.dae"></a-asset-item>
            <a-asset-item id="blue" src="http://localhost:8080/src/assets/models/eightbit/blueshell/shellmodel.dae"></a-asset-item>
            <a-asset-item id="bomb" src="http://localhost:8080/src/assets/models/eightbit/bomb/model.dae"></a-asset-item>
            <a-asset-item id="kart" src="http://localhost:8080/src/assets/models/eightbit/kart/model.dae"></a-asset-item>
            <a-asset-item id="princess" src="http://localhost:8080/src/assets/models/eightbit/princesspeach/model.dae"></a-asset-item>
            <a-asset-item id="yoshi" src="http://localhost:8080/src/assets/models/eightbit/yoshi/model.dae"></a-asset-item>
            <a-asset-item id="luigi" src="http://localhost:8080/src/assets/models/eightbit/luigi/model.dae"></a-asset-item>
          </a-assets> 

          <a-assets>
            <audio src="http://localhost:8080/src/assets/sounds/mariokart.mp3" autoPlay preload></audio> 
          </a-assets>

           <a-entity collada-model="#peach" position="0 0 0"></a-entity>
           <a-sky color="lightblue"></a-sky>

           <a-entity position={this.state.campos.join(" ")} rotation="0 90 0">
              <a-camera>
              </a-camera>
           </a-entity>

           <a-sphere color="yellow" radius=".5" position={this.state.ballpos.join(" ")}></a-sphere>


           <a-entity collada-model="#star" position="26 .95 -20" scale=".5 .5 .5"></a-entity>
           <a-entity collada-model="#princess" position="17.25 1 -21" scale=".18 .18 .18" rotation="0 90 0"></a-entity>
           <a-entity collada-model="#yoshi" position="17.25 .4 -22" scale=".9 .9 .9"rotation="0 90 0"></a-entity>
           <a-entity collada-model="#luigi" position="17.5 1 -23" scale=".20 .20 .20" rotation="0 90 0"></a-entity>
           <a-entity collada-model="#fire" position="29.5 1.3 -25" scale=".04 .04 .04" rotation="0 270 0"></a-entity>

           <a-entity collada-model="#blue" position="18.20 1 -29.5" scale=" .03 .03 .03">
              <a-animation attribute="position" dur="10000" from="18.20 1 -29.5" to="19 1.1 -22" direction="alternate" repeat="indefinite"></a-animation>
           </a-entity>

           <a-entity collada-model="#bomb" position="20 1.10 -40" scale=".10 .10 .10" rotation="0 130 0"></a-entity>
           <a-entity collada-model="#kart" position="19 1.1 -22" scale=".15 .15 .15" rotation="0 180 0">
              <a-animation attribute="position" dur="10000" from="18.20 1 -29.5" to="19 1.1 -20" direction="alternate" repeat="indefinite"></a-animation>
           </a-entity>

        </a-scene>



        


      </div>
    )
  }

  
}

export default Eightbit;