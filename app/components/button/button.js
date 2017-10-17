import React from 'react'
import CSSModules from 'react-css-modules';
import styles from '../../styles/button.css'

const Button = (props) => {
  return <button styleName={`btn ${props.size} ${props.color}`}  onClick={props.clickFunc}>{props.text}</button>
}

export default CSSModules(Button, styles, {allowMultiple: true});
