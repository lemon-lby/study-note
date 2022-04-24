import React, { Component } from 'react'
import PropTypes from "prop-types"
import types from "../../../utils/commonTypes"
/**
 * 一组单选框
 */
export default class CheckBoxGroup extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
        datas: [],
        value: ""
    }

    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
    }
    /**
     * 得到一组单选框
     * @returns 
     */
    getRadios() {
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.value === item.value}
                    onChange={this.handleChange}
                />
                {item.text}
            </label>
        ))
    }
    render() {
        const bs = this.getRadios();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
