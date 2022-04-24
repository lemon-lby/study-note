import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        n: this.props.n
    }
    render() {
        return (
            <div>
                <h1>数字：{this.state.n}</h1>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>
                    n+1
                </button>
            </div>

        )
    }
}
