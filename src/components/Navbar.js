import React from 'react'
import Search from './Search.js'
import { Link } from "react-router-dom"
import '../css/navbar.scss'

class Navbar extends React.Component {

  render (){
    return (
      <div id="navbar">
        <Link to="/">
          <h1 onClick={this.props.goHome}>Podcast App</h1>
        </Link>
      </div>
    )
  }
}

export default Navbar; 
