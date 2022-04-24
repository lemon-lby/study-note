import React, { Component } from 'react'

export default class NumberInput extends Component {
    state = {
        val: "",
        loves: ["1", "2", "3", "4"],
        chooseLoves: ["2", "3"],
        selVal: "beijing"
    }
    render() {
        const checkboxs = this.state.loves.map(item =>
        (<label key={item}>

            <input type="checkbox"
                checked={this.state.chooseLoves.includes(item)}
                onChange={e => {
                    if (e.target.checked) {
                        this.setState({
                            chooseLoves: [...this.state.chooseLoves, item]
                        })
                    } else {
                        this.setState({
                            chooseLoves: this.state.chooseLoves.filter(l => l !== item)
                        })
                    }
                }} />{item}
        </label>)
        )
        return (
            <div>
                {/* <input type="text" value={this.state.val} onChange={e => {
                    var val = e.target.value;
                    val = val.replace(/\D/g, "");
                    this.setState({
                        val
                    })
                }} /> */}

                {/* {checkboxs}
                <button onClick={() => {
                    console.log(this.state.chooseLoves)
                }}>获取选中的值</button> */}

                <select value={this.state.selVal} onChange={e => {
                    this.setState({
                        selVal: e.target.value
                    })
                }}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="shenzhen">深圳</option>
                </select>
            </div>
        )
    }
}
