import React from 'react';
import '@fortawesome/react-fontawesome';
import M from 'materialize-css/dist/css/materialize.min.css';
import './UserProfile.scss';

import userData from '../../../helpers/data/userData';
// import { AutoInit } from 'materialize-css';

class UserProfile extends React.Component {
  state = {
    user: {},
  }

  componentDidMount() {
    this.setUserToState(3);
  }

  setUserToState = (uid) => {
    userData.getUserByUid(uid)
      .then((result) => this.setState({ user: result.data }))
      .catch((error) => console.error('error getting that user', error));
  }

  clickEvent = (e) => {
    const elem = document.querySelector('.collapsible.expandable');
    const instance = M.Collapsible.init(elem, {
      accordion: false,
    });
    instance.onclick(e);
  }

  // clickEvent = (e) => {
  //   e.preventDefault();
  //   const { instance } = this.props;
  // }

  render() {
    const { user } = this.state;

    return (
    <div>
      <div>
        <img src= {user.imageUrl} alt="avatar pic" className= "circle avatar" />
      </div>

      <div className="userInfo" >
        <ul className="collapsible expandable">
          <li>
            <div className="collapsible-header"><i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>UserName</div>
            <div className="collapsible-body"><span>{user.userName}</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="fa fa-at fa-3x" aria-hidden="true"></i>Email</div>
            <div className="collapsible-body"><span>{user.email}</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="fa fa-asterisk fa-3x" aria-hidden="true"></i>Password</div>
            <div className="collapsible-body"><span>{user.password}</span></div>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default UserProfile;
