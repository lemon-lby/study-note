import React, { Component } from 'react'
import Student from './Student'

export default class StudentsList extends Component {
  render() {
    //   获取组件数组
    const students =  this.props.stus.map(item => <Student key={item.id} {...item} />)
    return (
      <ul>
          {students}
      </ul>
    )
  }
}
