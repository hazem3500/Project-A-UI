import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, Switch } from 'react-router-dom'

import Login from './components/login/login'
import Button from './components/button/button'


class App extends React.Component {
  constructor(){
    super();
  }

  render () {

    return <div>

      <Button text='what is this'  size='medium' color='green'/>
      <ul>
        <li ><Link to="/login">login</Link></li>
      </ul>

      <Login />

      <Route exact={true} path="/login" component={Login}/>

    </div>
  }
}

export default App
