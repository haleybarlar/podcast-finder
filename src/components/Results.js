import React from 'react'
import ResultCard from './ResultCard.js'
import PodcastDetails from './PodcastDetails.js'
import '../css/results.scss'

class Results extends React.Component {

    state = {
        result: "",
        clicked: false,
        episodes: null
    }

    componentDidUpdate(prevProps) {
        if (prevProps.episode !== this.props.episode && this.props.episode) {
            this.setState({
                episodes: this.props.episode.episodes
            })
        }
    }

    handleClick = (event) => {
        this.setState({
            result: event.target.id,
            clicked: true
        })
        this.props.fetchEpisodes(event.target.id)
    }

    showAll = () => {
        this.setState({
            clicked: false
        })
    }

    goToAllEpisodes = () => {
        this.setState({
            clicked: true
        })
    }

    render (){
        let allPodcasts = (this.props.results !== null ? this.props.results.results.map(result => 
            <ResultCard 
                result={result} 
                key={result.id} 
                handleClick={this.handleClick}
                clicked={this.state.clicked}
                episodes={this.state.episodes}
                goToAllEpisodes={this.goToAllEpisodes}
            />
        ) : null)

        let podcastDetails = (this.props.episode ? 
            <PodcastDetails 
                episodes={this.props.episode.episodes}
                podcastTitle={this.props.episode.title}
                podcastImage={this.props.episode.image}
                podcastPublisher={this.props.episode.publisher}
                podcastDescription={this.props.episode.description}
                clicked={this.state.clicked}
            /> : null)

        return (
            <div id="all-results">
                <div id="results">{allPodcasts}</div> 
                {this.state.clicked ? 
                    <div id="single-podcast">
                        {podcastDetails}
                    </div> 
                : <h1>Choose a podcast</h1>}
            </div>
        )
    }
}

export default Results
