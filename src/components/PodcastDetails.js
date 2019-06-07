import React from 'react'
import EpisodeCard from './EpisodeCard.js'

class PodcastDetails extends React.Component {

    render (){

        let episodes = this.props.episodes.map(episode => <EpisodeCard episode={episode} key={episode.id}/>)

        console.log(this.props.episodes)
        
        return (
            <div id="podcast-details">
                <h1>{this.props.podcastTitle}</h1>
                {episodes}
            </div>
        )
    }

}

export default PodcastDetails