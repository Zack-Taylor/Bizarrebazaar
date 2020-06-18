import React from 'react';

import userData from '../../../helpers/data/userData';

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

  render() {
    const { user } = this.state;
    return (
      <div>
        <ul>
          <li>Avatar: <img src={user.imageUrl} alt="frodo's avatar pic"></img></li>
          <li>Name: {user.firstName} {user.LastName}</li>
          <li>Username: {user.userName}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>
      </div>
    );
  }
}

export default UserProfile;
