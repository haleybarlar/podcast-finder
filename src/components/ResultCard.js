import React from 'react'
import '../css/resultcard.scss'

class ResultCard extends React.Component {

    state = {
        hovered: false,
        clicked: false
    }

    handleHover = () => {
        this.setState({
            hovered: !this.state.hovered
        })
    }

    handleClick = () => {
        this.setState({
            clicked: true
        })
    }

    render (){

        return (
            <div id={this.props.result.id} 
                className="result-card" 
                onMouseEnter={this.handleHover} 
                onMouseLeave={this.handleHover}
            >
                {!this.state.hovered ?
                    <img 
                        src={this.props.result.thumbnail} 
                        alt="" id={this.props.result.id} 
                    />
                : 
                    (!this.state.clicked ? 
                        <div className="result-card" id="result-desc" >
                            <h1>{this.props.result.title_original}</h1>
                            <p>{this.props.result.description_original}</p>
                            <button 
                                id={this.props.result.id} 
                                onClick={(event) => {this.handleClick(); this.props.handleClick(event)}}
                            >
                            Episodes!
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

                            <button onClick={this.props.goToAllEpisodes}>See More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ResultCard
