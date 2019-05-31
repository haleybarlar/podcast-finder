import React from 'react'
import EpisodeCard from './EpisodeCard.js'

class PodcastDetails extends React.Component {

    render (){

        let episodes = this.props.episodes.map(episode => <EpisodeCard episode={episode} key={episode.id}/>)

        console.log(this.props.episodes)
        
        return (
            <div>
                <h1>{this.props.podcastTitle}</h1>
                <h3>{this.props.podcastDescription}</h3>
                <h3>{this.props.podcastPublisher}</h3>
                <img src={this.props.podcastImage} alt=""/>
                {episodes}
            </div>
        )
    }

}

export default PodcastDetails
