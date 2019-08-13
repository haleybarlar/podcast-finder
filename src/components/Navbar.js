import React from 'react'
import SearchOptions from './SearchOptions.js'
import { Link } from "react-router-dom"
import Menu from 'react-burger-menu/lib/menus/slide'
import '../css/navbar.scss'

class Navbar extends React.Component {

  state = {
    isOpen: false
  }

  closeBurger = () => {
    this.setState({
      isOpen: false
    })
  }

  handleStateChange (state) {
    this.setState({isOpen: state.isOpen})  
  }

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
          <Menu 
            noOverlay 
            right 
            isOpen={this.state.isOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <SearchOptions 
              fetchPodcasts={this.props.fetchPodcasts} 
              fetchEpisodes={this.props.fetchEpisodes}
              closeBurger={this.closeBurger}
            />
          </Menu>
        </div>
      </div>
    )
  }
}

export default Navbar; 
