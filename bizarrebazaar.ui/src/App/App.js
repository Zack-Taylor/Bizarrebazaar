<<<<<<< HEAD
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
=======
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import Auth from '../components/pages/Auth/Auth';
import ProductDetail from '../components/pages/ProductDetail/ProductDetail';
>>>>>>> master
import './App.scss';
import Auth from '../components/pages/Auth/Auth';
import Art from '../components/pages/ArtProducts/ArtProducts';
import Weapons from '../components/pages/WeaponProducts/WeaponProducts';
import Edible from '../components/pages/EdibleProducts/EdibleProducts';
import Clothing from '../components/pages/ClothingProducts/ClothingProducts';
import Jewelry from '../components/pages/JewelryProducts/JewelryProducts';
import Misc from '../components/pages/MiscProducts/MiscProducts';
import History from '../components/pages/HistoryProducts/HistoryProducts';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
<<<<<<< HEAD
      <div className="App">
        <Router>
          <MyNavbar authed={authed}/>
          <Switch>
            <PrivateRoute path="/" exact component={Home} authed={authed}/>
            <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
            <PrivateRoute path="/ArtProducts" exact component={Art} authed={authed}/>
            <PrivateRoute path="/WeaponsProducts" exact component={Weapons} authed={authed}/>
            <PrivateRoute path="/HistoryProducts" exact component={History} authed={authed}/>
            <PrivateRoute path="/JewelryProducts" exact component={Jewelry} authed={authed}/>
            <PrivateRoute path="/EdibleProducts" exact component={Edible} authed={authed}/>
            <PrivateRoute path="/ClothingProducts" exact component={Clothing} authed={authed}/>
            <PrivateRoute path="/MiscProducts" exact component={Misc} authed={authed}/>
          </Switch>
        </Router>
=======
      <div>
      <ProductDetail/>
>>>>>>> master
      </div>
    );
  }
}

export default App;
