import React from 'react'
import Search from './components/Search.js'
import Results from './components/Results.js'

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
      <div >
        <Search fetchPodcasts={this.fetchPodcasts} fetchEpisodes={this.fetchEpisodes}/>
        {this.state.results ? <Results results={this.state.results} episode={this.state.episodes} fetchEpisodes={this.fetchEpisodes}/> : null}
      </div>
    )
  }

}

export default App;
