import React from 'react';
import PropTypes from 'prop-types';

import userShape from '../../../helpers/propz/userShape';
import userData from '../../../helpers/data';

class UserProfile extends React.Component {
  render () {
    const { 
      firstName,
      lastName,
      username,
      email,
      password,
      imageUrl,
    } = this.props.user;

    return (
      <div>
        <ul>
        <li>Avatar: {imageUrl}</li>
          <li>Name: {firstName, lastName}</li>
          <li>Username: {username}</li>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
        </ul>
      </div>
    );
  }
}

export default UserProfile;
