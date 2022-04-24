import React, { Component } from 'react'

export default class MyCopm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        };
        const timer = setInterval(() => {
            if (this.state.number === 0) {
                clearInterval(timer);
                this.props.onOver && this.props.onOver();
                return;
            }
            this.setState({
                number: this.state.number - 1
            })
        }, 1000);
    }
    render() {
        return (
            <div onClick={this.props.onClick}>
                倒计时：{this.state.number}
            </div>
        )
    }
}
