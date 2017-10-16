import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './login.css'

import Button from '../button/button'

class Login extends React.Component{
  constructor(){
    super();

    this.state = {
      signInStyle: "show",
      signOutStyle: "hiddenUp"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.signTrans = this.signTrans.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target, 'submitted');
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

      </div>
    </div>
  }
}

export default CSSModules(Login, styles, {allowMultiple: true});
