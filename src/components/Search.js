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
        if (this.props.closeBurger) {
            this.props.closeBurger()
        }
        event.preventDefault()
        let result = this.state.inputValue
        this.props.fetchPodcasts(result)
        this.setState({
            inputValue: "",
            submitted: true
        })
        
    }

    render (){
        return (
            <div id="search">
                {this.state.submitted && (<Redirect to='/results' />)}
                <i class="material-icons">search</i>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search for a podcast"
                        onChange={this.handleChange} 
                        value={this.state.inputValue}
                    />
                </form>
            </div>
        )
    }

}

export default Search
