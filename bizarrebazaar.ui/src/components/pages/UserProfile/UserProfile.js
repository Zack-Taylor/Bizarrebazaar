import React from 'react';
import 'firebase/auth';

class UserProfile extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { userObj } = this.props;

    return (
      <div>
        <ul>
          <li>{userObj.userName}</li>
          <li>{userObj.email}</li>
          <li>{userObj.password}</li>
        </ul>
      </div>
    );
  }
}

export default UserProfile;
