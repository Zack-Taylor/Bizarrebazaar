import React from 'react';
import 'firebase/auth';
import userData from '../../../helpers/data/userData';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      username: '',
    };
  }

      registerEvent = (e) => {
        e.preventDefault();
        const {
          email, password, firstname, lastname, username, confirmPassword,
        } = this.state;
        const userObj = { ...this.state };
        userData.registerUser(email, password, firstname, lastname, username, confirmPassword)
          .then(() => {
            userData.addUserToDatabase(userObj);
            console.error('this works');
          })
          .catch((error) => {
            console.error('there was an error when logging in');
          });
      }

      handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value }); // dynamically setting the state. Now I don't have to write separate functions to handle this.
      }

      render() {
        const {
          email, password, confirmPassword, firstname, lastname, username,
        } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.registerEvent}>
                <FormInput
                        name='firstname'
                        type='text'
                        value={firstname}
                        handleChange={this.handleChange}
                        label='firstname'
                        required
                    />
                    <FormInput
                        name='lastname'
                        type='text'
                        value={lastname}
                        handleChange={this.handleChange}
                        label='lastname'
                        required
                    />
                     <FormInput
                        name='username'
                        type='text'
                        value={username}
                        handleChange={this.handleChange}
                        label='username'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomBtn type='submit'> Sign Up </CustomBtn>

                </form>
            </div>
        );
      }
}

export default SignUp;
