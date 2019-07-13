import React from 'react'
import EpisodeCard from './EpisodeCard'
import PodcastDetails from './PodcastDetails.js'
import '../css/randompodcast.scss'

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
		this.setState({
			clicked: true
		})
	}

    render() {
		let randomPodcast = (this.props.randomPodcast !== null && this.props.randomPodcast)

		let episodes = (this.props.episodes && this.props.episodes.episodes.map(episode => <EpisodeCard episode={episode}/>))
		console.log(randomPodcast)

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
				{this.state.clicked ? podcastDetails :
					<div>
						<button onClick={this.props.fetchRandomPodcast}>-></button>
						<img src={randomPodcast.image} alt=""/>
						<audio
							controls
							src={randomPodcast.audio}
						/>
						<button onClick={this.handleClick} id={randomPodcast.podcast_id} className="hear-more">hear more</button>
					</div>
				}
			</div>
        )
    }
}

export default RandomPodcast
