import React, { Component } from 'react'

export default class Comp extends Component {
    state = {
        n: 0
    }
    handleClick = () => {
        this.setState({
            n: this.state.n + 1
        });
        console.log(this.state.n)
    }
    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={this.handleClick}>点击</button>
                </p>
            </div>
        )
    }
}
