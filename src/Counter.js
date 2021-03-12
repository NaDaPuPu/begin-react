import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleIncrease = () => {
        console.log('Increase');
        console.log(this);
    }

    handleDecrease = () => {
        console.log('Decrease');
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}

export default Counter;