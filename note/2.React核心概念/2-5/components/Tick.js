// 计时器，用作倒计时

import React, { Component } from 'react'

export default class Tick extends Component {

  // 另一种初始化状态 JS Next语法
  state = {
    left: this.props.number
  }

  constructor(props) {
    super(props);
    // 初始化状态
    // this.state = {
    //   left: this.props.number
    // };

    
    this.timer = setInterval(() => {
      // 停止计时器
      if (this.state.left === 0) {
        clearInterval(this.timer);
        return;
      }

      //重新设置状态，触发自动的重新渲染
      this.setState({
        left: this.state.left - 1
      });
    }, 1000);


  }
  render() {
    return (
      <h1>
        倒计时：{this.state.left}
      </h1>
    )
  }
}
