import React from 'react'
import CSSModules from 'react-css-modules'
import { Link, Route, Switch } from 'react-router-dom'

import styles from './styles/height-fix.css'

import Login from './components/login/login'
import Home from './components/home/home'
import Header from './components/header/header'



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      signStatus: false,
    }

  }

  render () {

    return <div styleName='height'>
      <Route exact={true} path="/" component={Login}/>
      <Route exact={true} path="/home" component={Home}/>
    </div>
  }
}

export default CSSModules(App, styles, {allowMultiple: true});
