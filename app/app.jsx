import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, Switch } from 'react-router-dom';

import Button from './components/button/button'



const About = () => {
  return <h1>about a boat</h1>
}

class App extends React.Component {
  constructor(){
    super();
    this.btnTest = this.btnTest.bind(this);
  }

  btnTest(){
    console.log('btn has been pressed');
  }

  render () {

    return <div>

      <Button text='what is this'  size='large' color='green'/>

      <ul>
        <li ><Link to="/about">about</Link></li>
      </ul>

      <Route exact={true} path="/about" component={About}/>

    </div>
  }
}

export default App
