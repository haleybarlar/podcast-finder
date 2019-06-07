import React from 'react'
import Search from './Search.js'
import '../css/navbar.scss'

class Navbar extends React.Component {

  render (){
    return (
      <div id="navbar">
        <h1 onClick={this.props.goHome}>Podcast App</h1>
        {this.props.results ? 
            <div id="navbar-search">
                <Search 
                    fetchPodcasts={this.props.fetchPodcasts} 
                    fetchEpisodes={this.props.fetchEpisodes}
                />
            </div>
        : null}
      </div>
    )
  }
}

export default Navbar; 
