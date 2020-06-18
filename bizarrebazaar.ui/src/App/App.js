import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';
import ProductDetail from '../components/pages/ProductDetail/ProductDetail';
import './App.scss';
import SignInForm from '../components/shared/SignInForm/SignInForm';
import SignUpForm from './../components/shared/SignUpForm/SignUpForm';


firebaseConnection();
class App extends React.Component {
 


  render() {
    const { authed} = this.state;
    return (
      <div>

      </div>
    );
  }
}

export default App;
