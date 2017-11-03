import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/profileMain.css'

import Button from '../button/button'

class ProfileMain extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Button text='Edit profile' size='medium' color='blue'/>
                <h3>{this.props.name}</h3>
                <img src={this.props.img}/>
                <p>{this.props.location}</p>
                <span>{this.props.achievements}</span>
                <span>{this.props.tracksCompleted}</span>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Github</span>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default CSSModules(ProfileMain, styles, { allowMultiple: true });
