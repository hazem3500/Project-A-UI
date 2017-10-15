import React from 'react'

import classNames from 'classnames'

import styles from './button.css'

const Button = (props) => {
  const btnClass = classNames(
      styles.btn,
      styles[props.size],
      styles[props.color]
    );
  return <button className={ btnClass } onClick={props.clickFunc}>{props.text}</button>
}

export default Button
