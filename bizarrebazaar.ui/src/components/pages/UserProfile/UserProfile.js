import React from 'react';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import './UserProfile.scss';
import userData from '../../../helpers/data/userData';

class UserProfile extends React.Component {
  state = {
    userObj: {},
  }

  componentDidMount() {
    const { uid } = this.props.match.params;
    userData.getUserByUid(uid);
  }

  // getUser(uid) {
  //   userData.getUserByUid(uid)
  //     .then((result) => this.setState({ user: result.data }))
  //     .catch((error) => console.error('error getting user info', error));
  // }

  render() {
    const { userObj, uid } = this.state;

    return (
      <div>
        <h1 className="user-profile-header">Welcome, {userObj.firstName}!</h1>
        <div className="userInfo">
          <img alt={userObj.lastName} src={userObj.imageUrl} className="userImage" />
          <div>
            <ul>
              <li>{userObj.userName}</li>
              <li>{userObj.email}</li>
              <li>{userObj.password}</li>
            </ul>
          </div>
          <Link className="btn btn-success" to={`/sellerDashboard/${uid}`}>Seller Dashboard</Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
