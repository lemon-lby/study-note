import React, { Component } from 'react'
import { getRandom } from '../utils';
import Ball from './Ball';
/**
 * 每隔一段时间自动产生一个小球，各种数据随机
 */
export default class BallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballInfoes: []
        }
        const timer = setInterval(() => {
            if (this.state.ballInfoes.length > 3) {
                clearInterval(timer);
                return;
            }
            var info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(100, 500),
                ySpeed: getRandom(100, 500),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
            };
            this.setState({
                ballInfoes: [...this.state.ballInfoes, info]
            });

        }, 1000);
    }
    render() {
        const balls = this.state.ballInfoes.map(item => <Ball {...item} />)
        return (
            <div>
                {balls}
            </div>
        )
    }
}
