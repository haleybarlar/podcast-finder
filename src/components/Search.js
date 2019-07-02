import React from 'react'
import '../css/search.scss'
import { Redirect } from 'react-router'

class Search extends React.Component {

    state = {
        inputValue: "",
        submitted: false
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
            inputValue: "",
            submitted: true
        })
        
    }

    render (){
        if (this.state.submitted) {
            return <Redirect to='/results' />
          }
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

export default Search
