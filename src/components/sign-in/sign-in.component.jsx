import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email:'', password:''});
    }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput type="email"
                   name="email"
                   value={this.state.email}
                   handleChange={this.handleChange}
                   label="email"
                   required/>
             
            <FormInput type="password"
                   name="password"
                   value={this.state.password}
                   handleChange={this.handleChange}
                   label="password"
                   required/>

            <CustomButton type="submit"  >Sign In </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
