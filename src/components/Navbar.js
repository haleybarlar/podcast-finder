import React from 'react'
import Search from './Search.js'

class Navbar extends React.Component {

  render (){
    return (
      <div >
        <h1>Podcast App</h1>
        {this.props.results ? <Search fetchPodcasts={this.props.fetchPodcasts} fetchEpisodes={this.props.fetchEpisodes}/> : null}
      </div>
    )
  }
}

export default Navbar;
