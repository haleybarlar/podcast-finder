import React from 'react'
import SearchOptions from './SearchOptions.js'
import { Link } from "react-router-dom"
import Menu from 'react-burger-menu/lib/menus/slide'
import '../css/navbar.scss'

class Navbar extends React.Component {

  render (){
    return (
      <div id="navbar">
        <Link to="/">
          <h1 onClick={this.props.goHome}><span>listen</span>list</h1>
        </Link>
        <div className="big-menu">
          <SearchOptions 
            fetchPodcasts={this.props.fetchPodcasts} 
            fetchEpisodes={this.props.fetchEpisodes}
          />
        </div>
        <div className="burger-menu">
          <Menu noOverlay right>
            <SearchOptions 
              fetchPodcasts={this.props.fetchPodcasts} 
              fetchEpisodes={this.props.fetchEpisodes}
            />
          </Menu>
        </div>
      </div>
    )
  }
}

export default Navbar; 
