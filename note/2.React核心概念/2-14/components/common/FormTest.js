import React, { Component } from 'react'

export default class FormTest extends Component {
    state = {
        loginId: "",
        loginPwd: "",
        sex: "male",
        chooseLoves: [],
        loves: [
            { value: "football", text: "足球" },
            { value: "baseball", text: "棒球" },
            { value: "movie", text: "电影" },
            { value: "music", text: "音乐" },
        ],
        city: "beijing"
    }

    handleChange = e => {
        let val = e.target.value;
        let name = e.target.name;
        if (e.target.type === "checkbox") {
            //特殊处理
            if (e.target.checked) {
                val = [...this.state.chooseLoves, val]
            }
            else {
                val = this.state.chooseLoves.filter(item => item !== val)
            }
        }
        this.setState({
            [name]: val
        })
    }
    /**
     * 获取所有的爱好多选框
     */
    getLoveCheckBoxs() {
        const bs = this.state.loves.map(item => (
            <label key={item.value} >
                <input type="checkbox" name="chooseLoves" value={item.value} checked={this.state.chooseLoves.includes(item.value)} onChange={this.handleChange} />
                {item.text}
            </label>
        ));
        return bs
    }
    render() {
        const bs = this.getLoveCheckBoxs();
        return (
            <div>
                <p><input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange} /></p>
                <p><input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange} /></p>
                <p>
                    <label>
                        <input type="radio" name="sex" value={"male"} onChange={this.handleChange} checked={this.state.sex === "male"} />男
                    </label>
                    <label>
                        <input type="radio" name="sex" value={"female"} onChange={this.handleChange} checked={this.state.sex === "female"} />女
                    </label>
                </p>
                <p>
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shenzhen">深圳</option>
                    </select>
                </p>
                <p>
                    {bs}
                </p>

                <p>
                    <button onClick={() => { console.log(this.state) }}>获取表单数据</button>
                </p>
            </div>
        )
    }
}
