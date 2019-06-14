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
            result: event.target.id
            // clicked: true
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
        let allPodcasts = this.props.results.results.map(result => 
            <ResultCard 
                result={result} 
                key={result.id} 
                handleClick={this.handleClick}
                clicked={this.state.clicked}
                episodes={this.state.episodes}
                goToAllEpisodes={this.goToAllEpisodes}
            />
        )

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
            <div >
                {!this.state.clicked ? <div id="results">{allPodcasts}</div> : <div id="single-podcast"><button onClick={this.showAll}>Go back</button>{podcastDetails}</div>}
            </div>
        )
    }
}

export default Results
