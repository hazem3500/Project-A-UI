import React from 'react'
import CSSModules from 'react-css-modules'

import styles from '../../styles/home.css'

const Home = () => {
  return <h1 styleName='body'>Welcome home</h1>
}

export default CSSModules(Home, styles, {allowMultiple: true});
