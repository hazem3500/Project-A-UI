import React from 'react'

import CSSModules from 'react-css-modules'
import styles from '../../styles/signContent.css'

import Button from '../button/button'

const SignOutContent = (props) => {
  return <form styleName={`signForm ${props.signOutStyle}`}
    onSubmit={(e) => this.handleSubmit(e)}>
    <input styleName='input' type='text'
    name='username' placeholder='Username'/>
    <input styleName='input' type='text'
    name='email' placeholder='Email'/>
    <input styleName='input' type='password'
    name='password' placeholder='Password'/>
    <input styleName='input' type='password'
    name='confirmPassword' placeholder='Confirm Password'/>
    <div styleName='signFormOption'>
      <div>
        <input type='checkbox' name='rememberMe'/>
        Remember Me
      </div>
      <a href='#'>Forget Password?</a>
    </div>
    <Button text='Sign up' size='small' color='blue'/>
  </form>
}

export default CSSModules(SignOutContent, styles, {allowMultiple: true});
