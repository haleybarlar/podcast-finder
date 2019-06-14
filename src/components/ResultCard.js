import React from 'react'
import '../css/resultcard.scss'

class ResultCard extends React.Component {

    state = {
        seeMore: false,
        clicked: false,
    }

    render (){

        return (
            <div id={this.props.result.id} 
                className="result-card" 
            >
                {!this.state.seeMore ?
                    <img 
                        src={this.props.result.thumbnail} 
                        alt="" id={this.props.result.id} 
                        onClick={() => this.setState({ seeMore: true })}
                    />
                : 
                    (!this.state.clicked ? 
                        <div className="result-card" id="result-desc" >
                            <h1>{this.props.result.title_original}</h1>
                            <p>{this.props.result.description_original}</p>
                            <button 
                                id={this.props.result.id} 
                                onClick={(event) => {this.setState({ clicked: true }); this.props.handleClick(event)}}
                            >
                            Hear the first episode
                            </button>
                        </div> 
                    : 
                        <div>
                            {this.props.episodes ? 
                                <div>
                                    <h4>{this.props.episodes[0].title}</h4>
                                    <audio
                                        controls
                                        src={this.props.episodes[0].audio}
                                    />
                                </div>
                            : null}

                            <button onClick={this.props.goToAllEpisodes}>HearMore</button>
                            <button onClick={() => this.setState({ clicked: false })}>Description</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ResultCard
