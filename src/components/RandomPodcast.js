import React from 'react'
import EpisodeCard from './EpisodeCard'
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
		
        return (
			<div className="random-podcast">
				<button onClick={this.props.fetchRandomPodcast}>-></button>
				<img src={randomPodcast.image} id={randomPodcast.podcast_id} alt="" onClick={this.handleClick}/>
				{this.state.clicked ? episodes : <audio
					controls
					src={randomPodcast.audio}
				/>}
			</div>
        )
    }
}

export default RandomPodcast