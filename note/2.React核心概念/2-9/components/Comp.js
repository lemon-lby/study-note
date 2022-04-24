import React, { Component } from 'react'

export default class Comp extends Component {
    state = {
        n: 0
    }
    handleClick = () => {
        this.setState(cur => {
            //参数cur表示当前的状态
            //该函数的返回结果，会混合(覆盖掉之前的状态)
            //该函数是异步执行
            return {
                n: cur.n + 1
            }
        }, () => {
            console.log(this.state.n)
        });
        this.setState(cur => ({
            n: cur.n + 1
        }));


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
