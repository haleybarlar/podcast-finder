import React from 'react'
import ResultCard from './ResultCard'
import PodcastDetails from './PodcastDetails'
import '../css/quizresults.scss'

class QuizResults extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState({
      result: event.target.id,
      clicked: true
    })
    this.props.fetchEpisodes(event.target.id)
  }

  render() {
    let topFiveResults = (this.props.quizResults ? this.props.quizResults.podcasts.slice(0,5) : null)

    let quizResults = (topFiveResults ? topFiveResults.map(podcast =>
      <ResultCard
        result={podcast}
        handleClick={this.handleClick}
      />
      )
        : null)

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

      <div>
        <h1>Based on your choices, we think you might be interested in these podcasts:</h1>
        <div id="all-results">
        <div id="results">
          {quizResults}
        </div>
        {this.state.clicked ?
          <div id="single-podcast">
            {podcastDetails}
          </div>
        : <h1>Choose a podcast</h1>}
        </div>
      </div>
    )
  }
}

export default QuizResults
