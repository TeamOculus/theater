import React from 'react';

class Theater extends React.Component {
  render(){
    return (
      <div className="show-vr-div">
          <a-scene>
            <a-assets>
              <video id="nowplaying" autoplay loop="true" src="http://localhost:8080/src/videos/beebz.mp4" />
            </a-assets>
            
            <a-video src="#nowplaying" width="16" height="9" position="0 0 -20"></a-video>
          </a-scene>
      </div>
    )
  }
}

export default Theater;