import React from 'react'
import '../css/search.scss'

class Search extends React.Component {

    state = {
        inputValue: ""
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let result = this.state.inputValue
        this.props.fetchPodcasts(result)
        this.setState({
            inputValue: ""
        })
    }

    render (){
        return (
        <div id="search">
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="search for a podcast"
                    onChange={this.handleChange} 
                    value={this.state.inputValue}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }

}

export default Search;
