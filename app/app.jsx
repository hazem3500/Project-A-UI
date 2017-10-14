import React from 'react'
import ReactDOM from 'react-dom'

console.log('banana');

class App extends React.Component {
  constructor(){
    super();
  }

  render () {
    return <div>
      <p>banana</p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
