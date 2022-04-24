import React, { Component } from 'react'
import NewLifeCycle from './NewLifeCycle'
export default class App extends Component {
    state = {
        number: 1
    }
    render() {
        return (
            <div>
                <NewLifeCycle n={this.state.number} />
                <p><button onClick={() => {
                    this.setState({
                        n: this.state.number + 1
                    })
                }}>
                    n+1
                </button></p>

            </div>
        )
    }
}
