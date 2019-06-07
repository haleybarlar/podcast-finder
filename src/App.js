import React from 'react'
import Search from './components/Search.js'
import Results from './components/Results.js'
import Navbar from './components/Navbar.js'

class App extends React.Component {

  state = {
    results: null,
    episodes: null
  }

  fetchPodcasts = (result) => {
    const url = `https://listen-api.listennotes.com/api/v2/search?q=${result}&type=podcast`
    const key = '2a9e8cf643e24f8c8271678ddc18cb04'

    fetch(`${url}`, {
    headers: {
        'X-ListenAPI-Key': `${key}`
    }
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
        results: resp
    }))
  }

  fetchEpisodes = (result) => {
    const url = `https://listen-api.listennotes.com/api/v2/podcasts/${result}`
    const key = '2a9e8cf643e24f8c8271678ddc18cb04'

    fetch(`${url}`, {
    headers: {
        'X-ListenAPI-Key': `${key}`
    }
    })
    .then(resp => resp.json())
    .then(resp => this.setState({
        episodes: resp
    }))
  }

  render (){
    return (
      <div id="app">
        <Navbar 
          fetchPodcasts={this.fetchPodcasts} 
          fetchEpisodes={this.fetchEpisodes} 
          results={this.state.results}
          goHome={() => this.setState({ results: null })}
        />
        {this.state.results ? 
          <Results 
            results={this.state.results} 
            episode={this.state.episodes} 
            fetchEpisodes={this.fetchEpisodes}
          /> 
        :
        <div>
          <p>Search for a podcast by name:</p>
          <Search 
            fetchPodcasts={this.fetchPodcasts} 
            fetchEpisodes={this.fetchEpisodes}
          />
        </div>
        }
      </div>
    )
  }

}

export default App;
