import React from 'react'
import Results from './components/Results.js'
import Navbar from './components/Navbar.js'
import Quiz from './components/Quiz.js'
import SearchOptions from './components/SearchOptions.js'
import { Route, Switch } from "react-router-dom";
import './app.scss'

class App extends React.Component {

  state = {
    results: null,
    episodes: null,
    quiz: false
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
        <Switch>
          <Route exact path="/" render={() => 
            <SearchOptions
              fetchPodcasts={this.fetchPodcasts} 
              fetchEpisodes={this.fetchEpisodes}
            />
          }/>
          <Route exact path="/results" render={() => 
            <Results
              results={this.state.results} 
              episode={this.state.episodes} 
              fetchEpisodes={this.fetchEpisodes}
            />
          }/>
          <Route exact path="/quiz" component={Quiz}/>
        </Switch>
      </div>
    )
  }

}

export default App
