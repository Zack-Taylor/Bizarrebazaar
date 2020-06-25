import React from 'react';
import 'firebase/auth';
import './UserProfile.scss';
import getProductsByUser from '../../../helpers/data/productData';

class UserProfile extends React.Component {
  state = {
    productData: getProductsByUser,
  }

  sellerData = getProductsByUser(uid);

  render() {
    const { userObj } = this.props;

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
        </div>
        <div className="SellerInfo">
          {getProductsByUser.response}
        </div>
      </div>
    );
  }
}

export default UserProfile;
