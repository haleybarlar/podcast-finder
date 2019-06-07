import React from 'react'

class EpisodeCard extends React.Component {

    render (){
        return (
            <div>
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
