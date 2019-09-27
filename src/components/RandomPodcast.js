import React from 'react'
import PodcastDetails from './PodcastDetails.js'
import '../css/randompodcast.scss'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from "react-router-dom"

class RandomPodcast extends React.Component {
	state = {
		clicked: false
	}

	componentDidUpdate(prevProps) {
		if (prevProps.randomPodcast !== this.props.randomPodcast) {
			this.setState({
				clicked: false
			})
		}
	}

	handleClick = (event) => {
		this.props.fetchEpisodes(event.target.id)
		this.props.removeQuiz()
	}

    render() {


		let randomPodcast = (this.props.randomPodcast !== null && this.props.randomPodcast)

		let podcastDetails = (this.props.episodes &&
			<PodcastDetails
					episodes={this.props.episodes.episodes}
					podcastTitle={this.props.episodes.title}
					podcastImage={this.props.episodes.image}
					podcastDescription={this.props.episodes.description}
					clicked={this.state.clicked}
			/>
		)

        return (

			<div className="random-podcast">
					<div className="random-podcast-elements">
						<div className="title-and-image">
								<img src={randomPodcast.image} alt=""/>
								<div className="overlay">
									<div className="description">
										<p id="podcast-title">{randomPodcast.podcast_title}</p>
										<p id="episode-title">{randomPodcast.title}</p>
									</div>
								</div>
						</div>
						<ReactAudioPlayer 
							src={randomPodcast.audio}
							controls
						/>
						<div className="button">
							<Link to="/podcastdetails" onClick={() => {this.props.fetchEpisodes(randomPodcast.podcast_id)}}><button className="hear-more">HEAR MORE</button></Link>
							<button 
								onClick={this.props.fetchRandomPodcast} 
								id="next"
							>
								RANDOMIZE
							</button>
						</div>
					</div>
			</div>
        )
    }
}

export default RandomPodcast
