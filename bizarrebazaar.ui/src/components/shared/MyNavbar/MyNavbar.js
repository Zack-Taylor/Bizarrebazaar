import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/owl.png';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = { }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    return (
      <Navbar className="navbar">
        <Navbar.Brand>
          <Link className='logo-container' to='/home'>
            <img src={logo} className='logo-nav' alt='logo'/>
          </Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="options ml-auto">
          <Link className='option' to='/product'>SHOP</Link>
          <Link className='option' to='/product'>CATEGORIES</Link>
          <div className='option'><FontAwesomeIcon icon={faShoppingCart} /></div>

          {authed ? (

            <div className='option' onClick={this.logMeOut}><FontAwesomeIcon icon={faSignOutAlt}/></div>

          ) : (

            <div className="option"><Link to='/auth'><FontAwesomeIcon icon={faUserAlt} className='user-icon' /></Link></div>

          )
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default MyNavbar;
