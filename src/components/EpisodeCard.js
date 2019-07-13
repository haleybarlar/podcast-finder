import React from 'react'
import '../css/episodecard.scss'

class EpisodeCard extends React.Component {

    render (){
        return (
            <div id="episode-card">
                <h4>{this.props.episode.title}</h4>
                <audio
                    controls
                    src={this.props.episode.audio}
                />
            </div>
        )
    }

}

export default EpisodeCard
