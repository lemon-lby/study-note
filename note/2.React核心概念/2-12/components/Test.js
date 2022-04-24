import React, { Component } from 'react'
import Modal from './common/Modal'


export default class Test extends Component {
    state = {
        showModal: false
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <div>
                {this.state.showModal ?
                    (<Modal onClose={this.hideModal}>
                        <div style={{ background: "#fff" }}>
                            <h1>awsdad</h1>
                            <button onClick={this.hideModal}>隐藏朦层</button>
                        </div>

                    </Modal>)
                    : null
                }
                <p>
                    <button onClick={this.showModal}>显示朦层
                    </button>
                </p>
            </div>
        )
    }
}
