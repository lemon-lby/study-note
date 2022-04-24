import React, { Component } from 'react'
import PropTypes from "prop-types"

export class A {

}
export default class ValidationComp extends Component {
    // 先混和属性
    static defaultProps = {
        b: false
    }

    // 再调用相应的函数进行验证
    static propTypes = {
        a: PropTypes.number.isRequired,//a属性必须是一个数字类型，并且必填
        b: PropTypes.bool.isRequired,//b属性必须是一个布尔类型，并且必填
        onClick: PropTypes.func, // onClick必须是一个函数
        c: PropTypes.any.isRequired,//1.可以设置必填  2.队列保持整齐(所有属性都在该对象中)
        d: PropTypes.node.isRequired,//必填 且 必须是可渲染的内容，字符串、数字、React元素
        e: PropTypes.element,//e必须是一个React元素
        f: PropTypes.elementType,//f必须是一个组件类型
        g: PropTypes.instanceOf(A),//g必须是A的实例
        sex: PropTypes.oneOf(["男", "女"]),//sex必须是其中一个
        h: PropTypes.arrayOf(PropTypes.number),//必须是一个数字数组
        i: PropTypes.objectOf(PropTypes.number),//对象中所有属性值必须是数字
        j: PropTypes.shape({//属性必须满足该对象的要求
            name: PropTypes.string.isRequired,//name必须是一个字符串 必填
            age: PropTypes.number,//age必须是一个数字
            //地址
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string,
            }).isRequired
        }),
        k: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
        })),
        m: PropTypes.oneOfType([PropTypes.string], [PropTypes.number]), //类型中的一种
        n: function (props, propName, componentName) {
            const val = props[propName];
            //必填
            //该属性必须是一个数字，且取值范围是1-100
            if (val === undefined || val === null) {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} is Required`)
            }
            if (typeof val !== "number") {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} is not a number`)
            }
            if (val < 0 || val > 100) {
                return new Error(`invalid prop ${propName} in ${componentName},${propName} must in 0 to 100`)
            }
        }
    }
    render() {
        return (
            <div>
                {this.props.a}
            </div >
        )
    }
}
