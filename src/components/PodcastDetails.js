import React from 'react'
import EpisodeCard from './EpisodeCard.js'
import '../css/podcastdetails.scss'

class PodcastDetails extends React.Component {

    render (){
        let episodes = (this.props.episodes ? this.props.episodes.map(episode => <EpisodeCard episode={episode} key={episode.id}/>) : null)

        return (
            <div id="podcast-details">
              <div id="podcast-description">
                <img src={this.props.podcastImage} alt=""/>
                <h1>{this.props.podcastTitle}</h1>
              </div>
              <h3>{this.props.podcastDescription}</h3>
              <div id="episodes">
                {episodes}
              </div>
            </div>
        )
    }

}

export default PodcastDetails
