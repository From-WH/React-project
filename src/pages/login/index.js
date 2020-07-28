import React, { Component } from 'react'
import Header from '../../components/header'
import './login.scss'

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <Header></Header>
        <h2>This is login page</h2>
        <button onClick={() => { this.goHome() }}>click me</button>
      </div>
    )
  }
  goHome() {
    this.props.history.push('./home')
  }
}

export default Login