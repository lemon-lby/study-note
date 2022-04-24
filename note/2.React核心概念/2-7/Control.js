import React, { Component } from 'react'
import MyCopm from './MyCopm'


export default class Control extends Component {
    state = {
        isOver: false
    }
    constructor(props) {
        super(props);
        this.handleOver = this.handleOver.bind(this);
    }
    handleOver = () => {
        this.setState({
            isOver: true
        })
        console.log("到计时完成")
    };
    handleClick = () => {
        console.log("点击了")
    }
    render() {
        let status = "正在倒计时";
        return (
            <div>
                <MyCopm onClick={this.handleClick} onOver={this.handleOver} number={5} />
                <h2>{status}</h2>
            </div>
        )
    }
}
