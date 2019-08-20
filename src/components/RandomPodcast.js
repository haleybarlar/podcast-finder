import React from 'react'
import PodcastDetails from './PodcastDetails.js'
import '../css/randompodcast.scss'
import ReactAudioPlayer from 'react-audio-player';

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
		this.setState({
			clicked: true
		})
	}

    render() {


		let randomPodcast = (this.props.randomPodcast !== null && this.props.randomPodcast)

		if (randomPodcast) {
			console.log(randomPodcast)
		}

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
				{this.state.clicked ? <div><button onClick={() => {this.setState({clicked: false}); this.props.removeQuiz()}}>back</button>{podcastDetails}</div> :
					<div className="random-podcast-elements">
						<div className="title-and-image">
							<img src={randomPodcast.image} alt=""/>
							<div className="description">
								<p id="podcast-title">{randomPodcast.podcast_title}</p>
								<p id="episode-title">{randomPodcast.title}</p>
								<div className="button">
								<button onClick={this.handleClick} id={randomPodcast.podcast_id} className="hear-more">hear more</button>
								<button onClick={this.props.fetchRandomPodcast} id="next">randomize</button>
								</div>
							</div>
						</div>
						<ReactAudioPlayer 
							src={randomPodcast.audio}
							controls
						/>
						
					</div>
				}
			</div>
        )
    }
}

export default RandomPodcast
