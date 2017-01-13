import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Eightbit extends React.Component {
  constructor() {
    super();
    this.state = {
      campos: [19, 0, -22],
      currentdegree: 0

    }
    // this.goHome = this.goHome.bind(this)
    // x, z
    this.coordinates = {
      "0": [0,0.005],
      "45": [0.005,0.005],
      "90": [0.005,0],
      "135": [0.005,-0.005],
      "180":[0,-0.005],
      "225":[-0.005,-0.005],
      "270":[-0.005,0],
      "315":[-0.005,0.005],
    }
  }
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount(){
    let statePointer = this.state;
    this.setState({
      ballpos: [statePointer.campos[0], statePointer.campos[1], statePointer.campos[2]+0.005]
    })
    for (let i=0; i < 1000000; i++) {
      setTimeout(() => {
        let ballPointer = this.state.ballpos;
        let camerapos = this.state.campos.slice();
        this.setState(this.getNewPositions())
      }, i * 10)
    }
  }


  getNewPositions(){
    let ballPointer = this.state.ballpos;
    let camerapos = this.state.campos.slice();
    console.log(this.coordinates[this.state.currentdegree.toString()][0], this.coordinates[this.state.currentdegree.toString()][1])
    return {campos: [ballPointer[0], ballPointer[1], ballPointer[2]], 
      ballpos: [camerapos[0]+this.coordinates[this.state.currentdegree.toString()][0], camerapos[1], camerapos[2]+this.coordinates[this.state.currentdegree.toString()][1]]}
  }

  // goHome() {
  //   this.context.router.push("/")
  // }

  componentDidMount() {
    window.addEventListener('keypress', (event) => {
      if (event.keyCode == 122){
        let currentdegreePointer = this.state.currentdegree;
          this.setState({
            currentdegree: currentdegreePointer += 45
          })
          if (this.state.currentdegree === 360){
            this.setState({
              currentdegree: 0
            })
          }
        this.getNewPositions = function() {
          let ballPointer = this.state.ballpos;
          let camerapos = this.state.campos.slice();
          console.log(this.coordinates[this.state.currentdegree.toString()][0], this.coordinates[this.state.currentdegree.toString()][1])
          return {campos: [ballPointer[0], ballPointer[1], ballPointer[2]], 
            ballpos: [camerapos[0]+this.coordinates[this.state.currentdegree.toString()][0], camerapos[1], camerapos[2]+this.coordinates[this.state.currentdegree.toString()][1]]}
        }
      } else if (event.keyCode == 120){
          if (this.state.currentdegree === 0){
            this.setState({
              currentdegree: 360
            })
          }
          let currentdegreePointer = this.state.currentdegree;
          this.setState({
            currentdegree: currentdegreePointer -= 45
          })
        this.getNewPositions = function() {
          let ballPointer = this.state.ballpos;
          let camerapos = this.state.campos.slice();
          console.log(this.coordinates[this.state.currentdegree.toString()][0], this.coordinates[this.state.currentdegree.toString()][1])
          return {campos: [ballPointer[0], ballPointer[1], ballPointer[2]], 
            ballpos: [camerapos[0]+this.coordinates[this.state.currentdegree.toString()][0], camerapos[1], camerapos[2]+this.coordinates[this.state.currentdegree.toString()][1]]}
        }
      }
    
    })
    // let goHomePointer = this.goHome;
    // document.querySelector('#stardoor').addEventListener('click', function () {
    //   console.log('I was clicked!');
    //   goHomePointer();
    // });
  }
  
  render(){
    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            
            <a-asset-item id="peach" src="/src/assets/models/eightbit/peach/model.dae"></a-asset-item>
            <a-asset-item id="star" src="/src/assets/models/eightbit/star/model.dae"></a-asset-item>
            <a-asset-item id="fire" src="/src/assets/models/eightbit/fire/model.dae"></a-asset-item>
            <a-asset-item id="blue" src="/src/assets/models/eightbit/blueshell/shellmodel.dae"></a-asset-item>
            <a-asset-item id="bomb" src="/src/assets/models/eightbit/bomb/model.dae"></a-asset-item>
            <a-asset-item id="kart" src="/src/assets/models/eightbit/kart/model.dae"></a-asset-item>
            <a-asset-item id="princess" src="/src/assets/models/eightbit/princesspeach/model.dae"></a-asset-item>
            <a-asset-item id="yoshi" src="/src/assets/models/eightbit/yoshi/model.dae"></a-asset-item>
            <a-asset-item id="luigi" src="/src/assets/models/eightbit/luigi/model.dae"></a-asset-item>
            <a-asset-item id="boswer" src="/src/assets/models/eightbit/boswer/model.dae"></a-asset-item>
            <a-asset-item id="stargate" src="/src/assets/models/eightbit/stargate/model.dae"></a-asset-item>
          </a-assets> 

          <a-assets>
            <audio src="/src/assets/sounds/mariokart.mp3" autoPlay preload></audio> 
          </a-assets>

           <a-entity collada-model="#peach" position="0 0 0"></a-entity>
           <a-sky color="lightblue"></a-sky>

           <a-entity position={this.state.campos.join(" ")} rotation="0 210 0">
              <a-camera>
                <a-cursor color="yellow" fuse="true" fuse-timeout="3000">
                  <a-animation begin="fusing" easing="ease" attribute="scale" fill="none" from="1 1 1" to="0 0 0" dur="3000"></a-animation>
                </a-cursor>
              </a-camera>
           </a-entity>

           <a-sphere color="yellow" radius=".5" position={this.state.ballpos.join(" ")}></a-sphere>

           <a-entity bmfont-text="text: Press Z to steer left, X to steer right; color: black" position="38 10 -7" scale="8 8 8" rotation="0 180 0"></a-entity>

           <a-entity collada-model="#star" position="26 .95 -20" scale=".5 .5 .5"></a-entity>
           <a-entity collada-model="#princess" position="17.25 1 -21" scale=".18 .18 .18" rotation="0 90 0"></a-entity>
           <a-entity collada-model="#yoshi" position="17.25 .4 -22" scale=".9 .9 .9"rotation="0 90 0"></a-entity>
           <a-entity collada-model="#luigi" position="17.5 1 -23" scale=".20 .20 .20" rotation="0 90 0"></a-entity>
           <a-entity collada-model="#fire" position="29.5 1.3 -25" scale=".04 .04 .04" rotation="0 270 0"></a-entity>
           <a-entity collada-model="#boswer" position="17.75 1 -24.74" scale=".4 .4 .4" rotation="0 90 0"></a-entity>

           <a-entity collada-model="#blue" position="18.20 1 -29.5" scale=" .03 .03 .03">
              <a-animation attribute="position" dur="10000" from="18.20 1 -29.5" to="19 1.1 -22" direction="alternate" repeat="indefinite"></a-animation>
           </a-entity>

           <a-entity collada-model="#bomb" position="20 1.10 -40" scale=".10 .10 .10" rotation="0 130 0"></a-entity>
           <a-entity collada-model="#kart" position="19 1.1 -22" scale=".15 .15 .15" rotation="0 180 0">
              <a-animation attribute="position" dur="10000" from="18.20 1 -29.5" to="19 1.1 -20" direction="alternate" repeat="indefinite"></a-animation>
           </a-entity>

           <a-entity id="stardoor" collada-model="#stargate" position="0 10 0" rotation="0 90 0"></a-entity>

        </a-scene>



        


      </div>
    )
  }

  
}

export default Eightbit;