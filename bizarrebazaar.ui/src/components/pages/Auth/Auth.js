import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import SignUpForm from '../../shared/SignInForm/SignInForm';
import SignInForm from '../../shared/SignUpForm/SignUpForm';
import owl from '../../../assets/owl.png';

import './Auth.scss';

class Auth extends Component {
  render() {
    return (
        <div>
      
          <div className="App">
            <div className="App__Aside text-center">
                <img className="logo" src={owl} alt="logo" />
            </div>
            <div className="App__Form">
              <div className="PageSwitcher">
                  <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>

                </div>

                <div className="FormTitle">
                    <Link to="/sign-up" className="FormTitle__Link">Sign In</Link> or <Link to="/sign-in" className="FormTitle__Link">Sign Up</Link>
                </div>

                <Route exact path="/sign-up" component={SignUpForm}>
                </Route>
                <Route path="/sign-in" component={SignInForm}>
                </Route>
            </div>

          </div>
    
        </div>

    );
  }
}

export default Auth;
