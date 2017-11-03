import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from '../../styles/track.css'

class Track extends Component {
  constructor(){
      super();

      this.state = {
        showRating: false,
        showButton: false,
      }
  }

  render() {
    return (
      <div>
        <a href={this.props.url}>
            <h3>{this.props.title}</h3>
            <span>{this.props.rating}</span>
            <img src={this.props.img}/>
            <p>{this.props.desc}</p>
        </a>
      </div>
    )
  }
}

export default CSSModules(Track, styles, { allowMultiple: true });

