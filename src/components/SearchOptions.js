import React from 'react'
import Search from './Search.js'
import Quiz from './Quiz.js'
import { Link } from "react-router-dom"

class SearchOptions extends React.Component {
    render() {
        return (
            <div>
                <p>Search for a podcast by name:</p>
                <Search 
                    fetchPodcasts={this.props.fetchPodcasts} 
                    fetchEpisodes={this.props.fetchEpisodes}
                />
                <p>or</p>
                <Link to="/quiz">
                    <p>take a quiz to find out what to listen to</p>
                </Link>
            </div>
        )
    }
}

export default SearchOptions