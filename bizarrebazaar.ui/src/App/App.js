/* eslint-disable no-shadow */
import React, { Component } from 'react';
import Auth from '../components/pages/Auth/Auth';
import ProductDetail from '../components/pages/ProductDetail/ProductDetail';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
      <ProductDetail/>
      </div>
    );
  }
}

export default App;
