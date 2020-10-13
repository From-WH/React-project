import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="header-page">
        <h2>
          <span>{this.props.name}</span>
        </h2>
      </div>
    )
  }
  aaa() {
    console.log(
      this.props.paramsData
    )
  }
}
export default Header