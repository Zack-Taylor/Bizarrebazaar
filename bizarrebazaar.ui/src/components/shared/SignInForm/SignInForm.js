import React from 'react';
import { Link } from 'react-router-dom';
import userData from '../../../helpers/data/userData';
import './SignInForm.scss';

class SignInForm extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  }

  loginEvent = (e) => {
    e.preventDefault();
    const {user} = this.state;
    userData.loginUser(user)
      .then(() => {
        console.error('user login');
      })
      .catch((error) => {
        console.error('there was an error when logging in');
      });
  }

  emailChange = (e) => {
    e.preventDefault();
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  }

  passwordChange = (e) => {
    e.preventDefault();
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="FormCenter">
        <form className="FormFields">
          <div className="FormField form-group">
            <label className="FormField__Label" htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            className="FormField__Input"
            placeholder="Enter your email address"
            value={user.email}
            onChange={this.emailChange}/>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            className="FormField__Input form-control"
            placeholder="Enter your password"
            value={user.password}
            onChange={this.passwordChange}/>
          </div>

          <div className="FormField">
          <button className="FormField__Button mr-20" onClick={this.loginEvent}>Sign In</button> <Link to="/sign-in" className="FormField__Link">Create an account</Link>
        </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
