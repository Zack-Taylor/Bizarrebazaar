/* eslint-disable no-shadow */
import React, { Component } from 'react';
import Auth from '../components/pages/Auth/Auth';
import UserProfile from '../components/shared/UserProfile/UserProfile';
import ProductDetail from '../components/pages/ProductDetail/ProductDetail';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
      <Auth/>
      <UserProfile/>
      <ProductDetail/>
      </div>
    );
  }
}

export default App;
