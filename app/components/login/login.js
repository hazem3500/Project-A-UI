import React from 'react'
import { Link } from 'react-router-dom'

import CSSModules from 'react-css-modules'
import styles from '../../styles/login.css'

import SignInContent from './signInContent'
import SignOutContent from './signOutContent'

import {graphql, gql} from 'react-apollo'
import { GC_AUTH_TOKEN } from '../../consts'

class Login extends React.Component{
  constructor(){
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.signTrans = this.signTrans.bind(this);

    this.state = {
      signInStyle: "showIn",
      signOutStyle: "hiddenUp",
      email: "",
      password: "",
    }
  }

  signTrans(e){
    const signInForm = document.getElementById('signInForm');
    if(e.target.id == "signUp"){
      this.setState({
        signInStyle: "hiddenIn",
        signOutStyle: "showOut"
      });
    } else {
      this.setState({
        signInStyle: "showIn",
        signOutStyle: "hiddenUp"
      });
    }
  }

  async handleSubmit(e){
    e.preventDefault();
    const session = await this.props.signinUserMutation({
      variables: {
        email: this.state.email,
        password: this.state.password,
      }
    });
    localStorage.setItem("GC_USER_ID", session.data.signinUser.user.id)
    localStorage.setItem("GC_AUTH_TOKEN", session.data.signinUser.token)
    console.log(session.data.signinUser.token, session.data.signinUser.user.id, 'submitted');
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
        <div styleName='signTrans'>
          <SignInContent signInStyle = {this.state.signInStyle}
            email = {this.state.email} password = {this.state.password}/>
          <SignOutContent signOutStyle = {this.state.signOutStyle}/>
        </div>
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
