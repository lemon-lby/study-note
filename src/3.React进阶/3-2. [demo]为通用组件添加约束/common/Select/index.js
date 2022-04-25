import React, { Component } from 'react'
import PropTypes from "prop-types"
import types from "../../../utils/commonTypes"
/**
 * 一组option
 */
export default class Select extends Component {
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
     * 得到一组option
     * @returns 
     */
    getOptions() {
        return this.props.datas.map(item => (
            <option key={item.value} value={item.value}>
                {item.text}
            </option>
        ))
    }
    render() {
        const options = this.getOptions();
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}
