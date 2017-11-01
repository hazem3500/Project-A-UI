import React from 'react'

import CSSModules from 'react-css-modules'
import styles from '../../styles/signContent.css'

import Button from '../button/button'

const SignInContent = (props) => {
  return <form styleName={`signForm ${props.signInStyle}`}
    onSubmit={(e) => this.handleSubmit(e)}>
    <input styleName='input' type='text'
      name='email' placeholder='Email'
      value={props.email}
      onChange={(e) => this.setState({email: e.target.value}) }/>
    <input styleName='input' type='password'
      name='password' placeholder='Password'
      value={props.password}
      onChange={(e) => this.setState({ password: e.target.value })}/>
    <div styleName='signFormOption'>
      <div>
        <input type='checkbox' name='rememberMe'/>Remember Me
      </div>
      <a href='#'>Forget Password?</a>
    </div>
    <Button text='Sign in' size='small' color='blue' />
  </form>
}

export default CSSModules(SignInContent, styles, {allowMultiple: true});
