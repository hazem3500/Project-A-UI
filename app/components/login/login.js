import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './login.css'

import Button from '../button/button'

import {
  graphql,
  gql
} from 'react-apollo';
import { GC_AUTH_TOKEN } from '../../consts'

class Login extends React.Component{
  constructor(){
    super();

    this.state = {
      signInStyle: "show",
      signOutStyle: "hiddenUp",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.signTrans = this.signTrans.bind(this);
  }


  // async
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.email, this.state.password,'submitted');
    // await
    const session = this.props.signinUserMutation({
      variables: {
        email: this.state.email,
        password: this.state.password,
      }
    })
    localStorage.setItem("GC_USER_ID", session.data.signinUser.user.id)
    localStorage.setItem("GC_AUTH_TOKEN", session.data.signinUser.token)
    console.log(session.data.signinUser.token, session.data.signinUser.user.id, 'submitted');
  }

  signTrans(e){
    const signInForm = document.getElementById('signInForm');
    if(e.target.id == "signUp"){
      this.setState({
        signInStyle: "hiddenIn",
        signOutStyle: "show"
      });
    } else {
      this.setState({
        signInStyle: "show",
        signOutStyle: "hiddenUp"
      });
    }
    console.log(this.state);
  }

  render(){
    return <div styleName='body'>
      <div styleName='card'>
        <div styleName='sign-header'>
          <input type="radio" name="sign" id='signIn' onClick={this.signTrans} defaultChecked/>
          <label htmlFor='signIn'>Sign in</label>
          <input type="radio" name="sign" id='signUp' onClick={this.signTrans}/>
          <label htmlFor='signUp'>Sign up</label>
        </div>

        <form styleName={`signForm ${this.state.signOutStyle}`}  onSubmit={(e) => this.handleSubmit(e)}>
          <input styleName='input' type='text' name='email' placeholder='Email'/>
          <input styleName='input' type='text' name='email' placeholder='Email'/>
          <input styleName='input' type='password' name='password' placeholder='Password'/>
          <div styleName='signFormOption'>
            <div>
              <input type='checkbox' name='rememberMe'/>Remember Me
            </div>
            <a href='#'>Forget Password?</a>
          </div>
          <Button text='Log in' size='small' color='blue'/>
        </form>
        <form styleName={`signForm ${this.state.signInStyle}`}  onSubmit={(e) => this.handleSubmit(e)}>
          <input styleName='input' type='text' name='email' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value}) }/>
          <input styleName='input' type='password' name='password' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
          <div styleName='signFormOption'>
            <div>
              <input type='checkbox' name='rememberMe'/>Remember Me
            </div>
            <a href='#'>Forget Password?</a>
          </div>
          <Button text='Log in' size='small' color='blue'/>
        </form>

      </div>
    </div>
  }
}


const SIGNIN_USER_MUTATION = gql `
  mutation signinUserMutation($email: String!, $password: String!) {
    signinUser(
      authProvider: {
        email: $email,
        password: $password,
      }
    ) {
      token
      user {
        id
      }
    }
  }
`
export default graphql(SIGNIN_USER_MUTATION, {
  name: 'signinUserMutation'
}) (CSSModules(Login, styles, {
  allowMultiple: true
}));
