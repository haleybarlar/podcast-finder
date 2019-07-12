import React from 'react'
import Search from './Search.js'
import '../css/searchoptions.scss'
import { Link } from "react-router-dom"

class SearchOptions extends React.Component {
    render() {
        return (
            <div className="search-options">
                <Search 
                    fetchPodcasts={this.props.fetchPodcasts} 
                    fetchEpisodes={this.props.fetchEpisodes}
                />
                <Link to="/quiz">
                    <p>take a quiz</p>
                </Link>
            </div>
        )
    }
}

export default SearchOptions