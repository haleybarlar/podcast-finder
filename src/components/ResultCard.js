import React from 'react'
import '../css/resultcard.scss'

class ResultCard extends React.Component {

    state = {
        clicked: false
    }

    flipCard = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render (){
        console.log(this.props.result)
        
        return (
            <div id={this.props.result.id} 
            className="result-card" onClick={this.flipCard}>
                {!this.state.clicked ?
                        <img 
                            src={this.props.result.thumbnail} 
                            alt="" id={this.props.result.id} 
                        />
                : 
                    <div className="result-card" id="result-desc" >
                        <h1>{this.props.result.title_original}</h1>
                        <p>{this.props.result.description_original}</p>
                        <button id={this.props.result.id} onClick={this.props.handleClick}>Hear the episodes!</button>
                    </div>
                }
            </div>
        )
    }
}

export default ResultCard
