import React from 'react'
import Results from './Results'
import '../css/quizresults.scss'
import { Carousel } from 'react-responsive-carousel'
import PodcastDetails from './PodcastDetails.js'
import { Link } from "react-router-dom"

class QuizResults extends React.Component {

  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState({
      clicked: true
    })
    this.props.fetchEpisodes(event.target.id)
  }

  render() {
    let podcastDetails = (this.props.episodes &&
			<PodcastDetails
					episodes={this.props.episodes.episodes}
					podcastTitle={this.props.episodes.title}
					podcastImage={this.props.episodes.image}
					podcastDescription={this.props.episodes.description}
					clicked={this.state.clicked}
			/>
    )
    
    let carouselImages = (this.props.quizResults && this.props.quizResults.podcasts.map(result =>
			<div id={result.id} onClick={this.handleClick} className="carousel-option">
				<img src={result.thumbnail} alt=""/>
			</div>
			)
		)

    return (
      <div className="quiz-results">
        <h1>Based on your choices, we think you might be interested in these podcasts:</h1>
        {!this.props.episodes && !this.props.quizResults ? <Link to="/">wait lol no go back home</Link> : null}
        {this.state.clicked ?
					<div>
						<button onClick={() => this.setState({ clicked: false })}>back</button>
						{podcastDetails}
					</div>
					:
					<Carousel>
						{carouselImages}
					</Carousel>
        }
      </div>
    )
  }
}

export default QuizResults
