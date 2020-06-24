import React from 'react';
import 'firebase/auth';
import './UserProfile.scss';

class UserProfile extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { userObj } = this.props;

    return (
      <div>
        <h1>Welcome, {userObj.firstName}!</h1>
        <div className="userInfo">
          <img alt={userObj.lastName} src={userObj.imageUrl} className="userImage" />
          <div>
            <ul>
              <li>{userObj.userName}</li>
              <li>{userObj.email}</li>
              <li>{userObj.password}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
