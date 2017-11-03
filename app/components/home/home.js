import React from 'react'
import CSSModules from 'react-css-modules'

import styles from '../../styles/home.css'

import Header from '../header/header'
import Footer from '../footer/footer'

const Home = () => {
  return <div>
    <Header/>
    <Footer/>
  </div>
}

export default CSSModules(Home, styles, {allowMultiple: true});
