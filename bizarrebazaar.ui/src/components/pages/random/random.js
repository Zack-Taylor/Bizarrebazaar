import React from 'react';
import './random.scss';
import owl from '../../../assets/owl.png';

class Random extends React.Component {
    state = { }

    render() {
      return (
      //     <div className="product-details-div">
      //   <h1 className="product-title">juice</h1>
      //   <sub className="filed-under">Filed under: juicy</sub>
      //   <p className="description">a beverage of so many flavors, riches,and notes.</p>
      //   <h1 className="price">$13</h1>
      // </div>

        <div className="image-and-details-container">
        <div className="product-image-div">
          <img
            className="product-image"
            src={owl}
            alt='logo'
          ></img>
        </div>
        <div className="product-details-div">
          <h1 className="product-title">owl</h1>
          <sub className="filed-under">Filed under: owl</sub>
          <p className="description">a beverage of so many flavors, riches,and notes.</p>
          <div className='price-container'>
          <h1 className="price">$13</h1>
          </div>
        </div>
      </div>
      );
    }
}

export default Random;
