import React, { Component } from 'react';
import SignIn from '../../shared/Sign-in/Sign-in';
import SignUp from '../../shared/SignUp/SignUp';
import './Auth.scss';

class Auth extends Component {
  render() {
    return (
      <div className=' container d-flex'>
        <div className='row sign-in-and-sign-up '>
            <SignIn className='col'/>
            <SignUp className='col'/>
        </div>
    </div>
    );
  }
}

export default Auth;
