// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    handleClick = (event) => {
        // console.log(this.props) => onDelayedClick (a function), and delay (a number)
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay) 
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>Delay Button</button>
        )
    }
}