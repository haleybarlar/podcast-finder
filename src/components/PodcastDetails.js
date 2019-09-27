import React from 'react'
import EpisodeCard from './EpisodeCard.js'
import '../css/podcastdetails.scss'

class PodcastDetails extends React.Component {

    render (){
        let episodes = (this.props.episodes ? this.props.episodes.map(episode => <EpisodeCard episode={episode} key={episode.id}/>) : <i class="material-icons">
        watch_later
        </i>)

        console.log('hi', episodes)
        return (
            <div id="podcast-details">
              <div id="podcast-description">
                <div id="div-img">
                  <img src={this.props.podcastImage} alt=""/>
                </div>
                <div id="title-desc">
                  <h1>{this.props.podcastTitle}</h1>
                  <p>{this.props.podcastDescription}</p>
                </div>
              </div>
              <div id="episodes">
                {episodes}
              </div>
            </div>
        )
    }

}

export default PodcastDetails
