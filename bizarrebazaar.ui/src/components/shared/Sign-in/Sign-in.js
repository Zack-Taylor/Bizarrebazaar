import React from 'react';
import userData from '../../../helpers/data/userData';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import './Sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

      loginEvent = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        userData.loginUser(email, password)
          .then(() => {
            // this.props.history.push('/home');
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
          email, password,
        } = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.loginEvent}>
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
                <div className='buttons'>
                    <CustomBtn type='submit'> Sign In </CustomBtn>
                    <CustomBtn type='button' onClick={userData.loginWithGoogle} isGoogleSignIn> Google Sign In</CustomBtn>
                </div>
                </form>
            </div>
        );
      }
}

export default SignIn;
