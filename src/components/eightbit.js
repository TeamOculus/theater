import React from 'react';

class Eightbit extends React.Component {
  render(){
    return (
      <div className="show-vr-div">

        <a-scene>
          <a-assets>
            
            <a-asset-item id="peach" src="http://localhost:8080/src/assets/models/eightbit/peach/model.dae"></a-asset-item>
            <a-asset-item id="star" src="http://localhost:8080/src/assets/models/eightbit/star/model.dae"></a-asset-item>
            <a-asset-item id="fire" src="http://localhost:8080/src/assets/models/eightbit/fire/model.dae"></a-asset-item>
            <a-asset-item id="blue" src="http://localhost:8080/src/assets/models/eightbit/blueshell/shellmodel.dae"></a-asset-item>
            <a-asset-item id="bomb" src="http://localhost:8080/src/assets/models/eightbit/bomb/model.dae"></a-asset-item>
          </a-assets> 

           <a-entity collada-model="#peach" position="0 0 0"></a-entity>
           <a-sky color="lightblue"></a-sky>

           <a-entity position="20 0 -14">
              <a-camera></a-camera>
           </a-entity>

           <a-entity collada-model="#star" position="26 .95 -20" scale=".5 .5 .5"></a-entity>

           <a-entity collada-model="#fire" position="29.5 1.3 -25" scale=".04 .04 .04" rotation="0 270 0"></a-entity>

           <a-entity collada-model="#blue" position="18.5 1 -22" scale=" .06 .06 .06"></a-entity>

           <a-entity collada-model="#bomb" position="20 1.10 -40" scale=".10 .10 .10" rotation="0 130 0"></a-entity>

        </a-scene>



        


      </div>
    )
  }

  
}

export default Eightbit;