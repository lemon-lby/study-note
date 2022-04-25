import React, { Component } from 'react'
import types from "../../../utils/commonTypes"
import PropTypes from "prop-types"
import withDataGroup from '../hoc/withDataGroup'

class CheckBox extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas.isRequired,
        onChange: PropTypes.func,
        info: types.singleData.isRequired
    }
    handleChange = e => {
        let newArr;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        } else {
            newArr = this.props.chooseDatas.filter(item => item !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr)
    }
    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    name={this.props.info.name}
                    value={this.props.info.value}
                    checked={this.props.chooseDatas.includes(this.props.info.value)}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>)
    }
}

export default withDataGroup(CheckBox)