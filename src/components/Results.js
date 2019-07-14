import React from 'react'
import PodcastDetails from './PodcastDetails.js'
import '../css/results.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
		} else if (prevProps.results !== this.props.results) {
			this.setState({
				// clicked: false
			})
		}
	}

	handleClick = (event) => {
		console.log('hello')
		this.setState({
			result: event.target.id,
			clicked: true
		})
		this.props.fetchEpisodes(event.target.id)
	}

	render (){
		// why tf is this undefined????????? console.log("clicked",this.props.episode)

		console.log(this.props.episode)

		let carouselImages = (this.props.results !== null && this.props.results && this.props.results.map(result =>
			<div id={result.id} onClick={this.handleClick} className="carousel-option">
				<img src={result.thumbnail} alt=""/>
			</div>
			)
		)

		let podcastDetails = (this.props.episode &&
			<PodcastDetails
					episodes={this.props.episode.episodes}
					podcastTitle={this.props.episode.title}
					podcastImage={this.props.episode.image}
					podcastDescription={this.props.episode.description}
					clicked={this.state.clicked}
			/>
		)

		return (
			<div id="all-results">
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

export default Results
