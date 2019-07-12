import React from 'react'
import ResultCard from './ResultCard.js'
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
		let carouselImages = (this.props.results !== null && this.props.results.results.map(result => 
			<div id={result.id} onClick={this.handleClick}>
				<img src={result.thumbnail}/>
			</div>
			)
		)

		let podcastDetails = (this.props.episode ?
			<PodcastDetails
					episodes={this.props.episode.episodes}
					podcastTitle={this.props.episode.title}
					podcastImage={this.props.episode.image}
					podcastPublisher={this.props.episode.publisher}
					podcastDescription={this.props.episode.description}
					clicked={this.state.clicked}
			/> 
			: null)

		return (
			<div id="all-results">
				<Carousel>
					{carouselImages}
				</Carousel>
			</div>
		)
	}
}

export default Results
