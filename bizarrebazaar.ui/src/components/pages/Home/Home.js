import './Home.scss';
import React from 'react';
import Random from '../random/random';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Home</h1>
        <Random/>
      </div>
    );
  }
}

export default Home;
