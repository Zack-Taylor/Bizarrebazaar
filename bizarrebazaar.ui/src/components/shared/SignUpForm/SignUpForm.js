import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {

    state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      username: '',
      hasAgreed: false,
    };
  

  render() {
    return (
      <div className="FormCenter" onSubmit={this.handleSubmit}>
      < form className="FormFields" onSubmit={this.handleSubmit}>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">FirstName</label>
          <input type="text" id="firstname" className="FormField__Input" placeholder="Enter your first name" name="firstname"  />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">LastName</label>
          <input type="text" id="lastname" className="FormField__Input" placeholder="Enter your last name" name="lastname" />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">UserName</label>
          <input type="text" id="username" className="FormField__Input" placeholder="Enter a username" name="username" />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email"/>
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
        </div>
      </form>

    <div className="FormField">
      <label className="FormField__CheckboxLabel">
        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree to all statements in <a href="" className="FormField__TermsLink">terms of service</a>
      </label>
   </div>

   <div className="FormField">
     <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-up" className="FormField__Link">I'm already a member</Link>
   </div>
   </div>
    );
  };
}


export default SignUpForm;

