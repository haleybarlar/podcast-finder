import React from 'react'
import ResultCard from './ResultCard.js'
import PodcastDetails from './PodcastDetails.js'
import '../css/results.scss'

class Results extends React.Component {

    state = {
        result: "",
        clicked: false
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

    render (){
        let results = this.props.results.results.map(result => 
            <ResultCard 
                result={result} 
                key={result.id} 
                handleClick={this.handleClick}
                clicked={this.state.clicked}
            />
        )

        let result = (this.props.episode ? 
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
                {!this.state.clicked ? <div id="results">{results}</div> : <div id="single-podcast"><button onClick={this.showAll}>Go back</button>{result}</div>}
            </div>
        )
    }

}

export default Results
