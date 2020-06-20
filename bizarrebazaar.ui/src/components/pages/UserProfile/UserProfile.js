import React from 'react';
import M from 'materialize-css/dist/css/materialize.min.css';
import userData from '../../../helpers/data/userData';

class UserProfile extends React.Component {
  state = {
    user: {},
  }

  componentDidMount() {
    this.setUserToState(3);
    // M.Collapsible.init(this.Collapsible);
  }

  setUserToState = (uid) => {
    userData.getUserByUid(uid)
      .then((result) => this.setState({ user: result.data }))
      .catch((error) => console.error('error getting that user', error));
  }

  clickEvent = (e) => {
    e.preventDefault();
    M.Collapsible.onclick();
  }

  render() {
    const { user } = this.state;

    return (
    <div>
      <div>
        <img src= {user.imageUrl} alt="avatar pic" class= "circle responsive-img" />
      </div>

      <div class="document" >
        <ul class="collapsible">
          <li>
            <div class="collapsible-header"><i class="fa fa-user-circle" aria-hidden="true"></i>UserName</div>
            <div class="collapsible-body"><span>{user.userName}</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="fa fa-at" aria-hidden="true"></i>Email</div>
            <div class="collapsible-body"><span>{user.email}</span></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="fa fa-asterisk" aria-hidden="true"></i>Password</div>
            <div class="collapsible-body"><span>{user.password}</span></div>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default UserProfile;
