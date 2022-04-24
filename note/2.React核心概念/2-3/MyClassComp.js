import React from "react";

export default class MyClassComp extends React.Component {

    // constructor(props) {
    //     super(props);
    //     console.log(props)
    // }
    /**
     * 该方法必须返回react元素
     */
    render() {
        console.log(this.props)
        return <h1>类组件的内容，数字：{this.props.number}</h1>
    }
}