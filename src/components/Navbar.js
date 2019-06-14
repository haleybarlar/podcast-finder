import React from 'react'
import Search from './Search.js'
import '../css/navbar.scss'

class Navbar extends React.Component {

  render (){
    return (
      <div id="navbar">
        <h1 onClick={this.props.goHome}>Podcast App</h1>
      </div>
    )
  }
}

export default Navbar; 
