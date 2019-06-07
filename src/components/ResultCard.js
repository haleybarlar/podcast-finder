import React from 'react'

class ResultCard extends React.Component {

    render (){
        
        return (
            <div onClick={this.props.handleClick} id={this.props.result.id}>
                <h1 id={this.props.result.id}>{this.props.result.title_original}</h1>
                <h3 id={this.props.result.id}>{this.props.result.description_original}</h3>
                <img src={this.props.result.thumbnail} alt="" id={this.props.result.id}/>
            </div>
        )
    }
}

export default ResultCard
