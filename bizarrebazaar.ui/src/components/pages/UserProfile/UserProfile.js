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
      `<div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src=${user.imageUrl} alt="frodo's avatar pic">
              <span class="card-title">${user.firstName} ${user.LastName}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
            <p><li>Username: ${user.userName}</li>
                <li>Email: ${user.email}</li>
                <li>Password: ${user.password}</li></p>
            </div>
          </div>
        </div>
      </div>`
    );
  }
}

export default UserProfile;
