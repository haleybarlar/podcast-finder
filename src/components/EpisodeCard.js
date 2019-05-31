import React from 'react'

class EpisodeCard extends React.Component {

    state = {
        play: false
    }

    audio = new Audio(this.props.episode.audio)

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause()
        })
    }

    render (){
        return (
            <div>
                <h4>{this.props.episode.title}</h4>
                <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
            </div>
        )
    }

}

export default EpisodeCard
