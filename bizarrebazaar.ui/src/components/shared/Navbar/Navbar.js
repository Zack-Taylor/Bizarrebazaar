import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import './Navbar.scss';

class Navbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  render() {
    const { authed } = this.props;
    const buildNav = () => {
      if (authed) {
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <p><Link className="nav-link" to="/">BIZARRE BAAZAR</Link></p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">SHOP<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="#">CATERGORIES<span class="sr-only">(current)</span></a>
                    </li>
                  </ul>
                  <div>
                  <ShoppingIcon className="shopping-icon" />
                  </div>
                  <div>
                  <FontAwesomeIcon icon={faUser} className="user-icon"/>
                  </div>
                </div>
              </nav>
        );
      }
      return <ul className="navbar-nav ml auto"></ul>;
    };

    return (
      <div>
          <div></div>
            <div>{buildNav()}</div>
      </div>
    );
  }
}

export default Navbar;
