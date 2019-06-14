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
                onClick={this.props.handleClick}
            >
                <img 
                    src={this.props.result.thumbnail} 
                    alt="" id={this.props.result.id}
                />
            </div>
        )
    }
}

export default ResultCard
