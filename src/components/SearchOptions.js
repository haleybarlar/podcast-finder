import React from 'react'
import Search from './Search.js'
import '../css/searchoptions.scss'
import { Link } from "react-router-dom"

class SearchOptions extends React.Component {
    render() {
        return (
            <div className="search-options">
                <Link to="/quiz">
                    <p onClick={this.props.closeBurger}>take a quiz</p>
                </Link>
                <Search 
                    fetchPodcasts={this.props.fetchPodcasts} 
                    fetchEpisodes={this.props.fetchEpisodes}
                    closeBurger={this.props.closeBurger}
                />
            </div>
        )
    }
}

export default SearchOptions