import React from 'react'
import SearchOptions from './SearchOptions.js'
import { Link } from "react-router-dom"
import '../css/navbar.scss'

class Navbar extends React.Component {

  render (){
    return (
      <div id="navbar">
        <Link to="/">
          <h1 onClick={this.props.goHome}>Podcast App</h1>
        </Link>
        <SearchOptions 
          fetchPodcasts={this.props.fetchPodcasts} 
          fetchEpisodes={this.props.fetchEpisodes}
        />
      </div>
    )
  }
}

export default Navbar; 
