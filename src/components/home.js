import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        this is from home

        <Link to="/theater"><button type="button">Go to Theater</button></Link>
      </div>
    )
  }
}

export default Home;