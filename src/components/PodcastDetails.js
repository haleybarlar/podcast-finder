import React from 'react'
import EpisodeCard from './EpisodeCard.js'

class PodcastDetails extends React.Component {

    render (){
        let episodes = (this.props.episodes ? this.props.episodes.map(episode => <EpisodeCard episode={episode} key={episode.id}/>) : null)

        return (
            <div id="podcast-details">
                <h1>{this.props.podcastTitle}</h1>
                <h3>{this.props.podcastDescription}</h3>
                {episodes}
            </div>
        )
    }

}

export default PodcastDetails
