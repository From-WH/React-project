import React, { Component } from 'react'
import Header from '../../components/header'
import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header name='Hello'></Header>
        <h1>Home page</h1>
        <button onClick={() => { this.goLogin() }}>goto login</button>
      </div>
    )
  }
  goLogin() {
    this.props.history.push('./login')
  }
}

export default Home