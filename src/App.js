import React from 'react'
import Results from './components/Results.js'
import Navbar from './components/Navbar.js'
import Quiz from './components/Quiz.js'
import RandomPodcast from './components/RandomPodcast.js'
import QuizResults from './components/QuizResults.js'
import PodcastDetails from './components/PodcastDetails.js'
import Footer from './components/Footer.js'
import { Route, Switch } from "react-router-dom";
import './app.scss'

class App extends React.Component {

  state = {
    results: null,
    episodes: null,
    quiz: false,
    quizResults: null,
    randomPodcast: null,
    clicked: false
  }

  componentDidMount() {
    this.fetchRandomPodcast()
  }

  fetchRandomPodcast = () => {
    const url = 'https://listen-api.listennotes.com/api/v2/just_listen'
    const key = '2a9e8cf643e24f8c8271678ddc18cb04'

    fetch(`${url}`, {
      headers: {
          'X-ListenAPI-Key': `${key}`
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      this.setState({
        randomPodcast: resp
    })
    })
  }

  fetchRecommendedPodcasts = (winnerValue) => {
    const url = `https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${winnerValue}`
    const key = '2a9e8cf643e24f8c8271678ddc18cb04'
    fetch(`${url}`, {
      headers: {
          'X-ListenAPI-Key': `${key}`
      }
      })
      .then(resp => resp.json())
      .then(resp => this.setState({
        quizResults: resp
      }))
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
    console.log("result", result)
    const url = `https://listen-api.listennotes.com/api/v2/podcasts/${result}`
    const key = '2a9e8cf643e24f8c8271678ddc18cb04'

    fetch(`${url}`, {
    headers: {
        'X-ListenAPI-Key': `${key}`
    }
    })
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        episodes: resp
      })
    })
  }

  render (){
    return (
      <div id="app">
        <Navbar
          fetchPodcasts={this.fetchPodcasts}
          fetchEpisodes={this.fetchEpisodes}
          results={this.state.results}
          goHome={() => this.setState({ results: null })}
          forceUpdate={() => this.forceUpdate()}
        />
        <Switch>
          <div className="app-body">
            <Route exact path="/" render={() =>
              <div className="body-content">
                <div className="random-podcast-app">
                  <RandomPodcast
                    randomPodcast={this.state.randomPodcast}
                    fetchEpisodes={this.fetchEpisodes}
                    episodes={this.state.episodes}
                    fetchRandomPodcast={this.fetchRandomPodcast}
                    removeQuiz={() => this.setState({ clicked: !this.state.clicked })}
                  />
                </div>
              </div>
            }/>
            <Route exact path="/podcastDetails" render={() => 
              <div>
                <PodcastDetails
                  episodes={this.state.episodes && this.state.episodes.episodes}
                  podcastTitle={this.state.episodes && this.state.episodes.title}
                  podcastImage={this.state.episodes && this.state.episodes.image}
                  podcastDescription={this.state.episodes && this.state.episodes.description}
                />
              </div>
            }/>
            <Route exact path="/results" render={() =>
              <Results
                results={this.state.results !== null && this.state.results.results}
                episode={this.state.episodes}
                fetchEpisodes={this.fetchEpisodes}
                fetchPodcasts={this.fetchPodcasts}
              />
            }/>
            <Route exact path="/quiz" render={() =>
              <Quiz
                fetchRecommendedPodcasts={this.fetchRecommendedPodcasts}
              />
            }/>
            <Route exact path="/quizResults" render={() =>
              <QuizResults
                quizResults={this.state.quizResults}
                fetchEpisodes={this.fetchEpisodes}
                episode={this.state.episodes}
              />
            }/>
          </div>
        </Switch>
        <Footer/>
      </div>
    )
  }

}

export default App
