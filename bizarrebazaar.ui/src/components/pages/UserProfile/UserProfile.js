import React from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import './UserProfile.scss';
import userData from '../../../helpers/data/userData';

class UserProfile extends React.Component {
  state = {
    internalUser: {},
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.getUser(id);
  }

  getUser(uid) {
    userData.getUserByUid(uid)
      .then((result) => this.setState({ internalUser: result.data }))
      .catch((error) => console.error('error getting user info', error));
  }

  render() {
    const { internalUser } = this.state;

    return (
      <div>
        <h1 className="user-profile-header">Welcome, {internalUser.firstName}!</h1>
        <div className="userInfo">
          <img alt={internalUser.lastName} src={internalUser.imageUrl} className="userImage" />
          <div>
            <ul>
              <li>{internalUser.userName}</li>
              <li>{internalUser.email}</li>
              <li>{internalUser.password}</li>
            </ul>
          </div>
          <div className="containsButton">
          <Link className="btn btn-success btn-dashboard" to={`/sellerDashboard/${internalUser.id}`}>Seller Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
