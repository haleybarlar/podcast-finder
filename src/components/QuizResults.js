import React from 'react'
import Results from './Results'
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
    let topFiveResults = (this.props.quizResults && this.props.quizResults.podcasts.slice(0,5))

    return (
      <div className="quiz-results">
        <h1>Based on your choices, we think you might be interested in these podcasts:</h1>
        <Results
          results={topFiveResults}
          episodes={this.props.episode}
          fetchEpisodes={this.props.fetchEpisodes}
        />
      </div>
    )
  }
}

export default QuizResults
