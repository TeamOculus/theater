import React from 'react';

class Theater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">
          <a-scene>
            <a-assets>
              <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />
            </a-assets>
            <a-box src="#boxTexture" position="0 2 -5" rotation="0 45 45" scale="2 2 2">
              <a-animation attribute="position" to="0 2.2 -5" direction="alternate" dur="2000"
                repeat="indefinite"></a-animation>
            </a-box>
          </a-scene>
      </div>
    )
  }
}

export default Theater;