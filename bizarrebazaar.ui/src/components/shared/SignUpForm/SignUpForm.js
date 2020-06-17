import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      username: '',
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter" onSubmit={this.handleSubmit}>
      < form className="FormFields" onSubmit={this.handleSubmit}>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">FirstName</label>
          <input type="text" id="firstname" className="FormField__Input" placeholder="Enter your first name" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">LastName</label>
          <input type="text" id="lastname" className="FormField__Input" placeholder="Enter your last name" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">UserName</label>
          <input type="text" id="username" className="FormField__Input" placeholder="Enter a username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstName">Email</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange}/>
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
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
  }
}

export default SignUpForm;
