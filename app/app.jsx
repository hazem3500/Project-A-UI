import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, Switch } from 'react-router-dom';

import styles from './test.css'

import Home from './components/home'



const About = () => {
  return <h1>about a boat</h1>
}

class App extends React.Component {
  constructor(){
    super();
  }

  render () {

    return <div>
      <ul>

        <li><Link to="/" className='banana'>Homes</Link></li>
        <li className={styles.nono}><Link to="/about">about</Link></li>
      </ul>

      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/about" component={About}/>

    </div>
  }
}

export default App
