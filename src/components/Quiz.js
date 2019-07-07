import React from 'react'
import { Redirect } from 'react-router'
import comedy from '../images/comedy.jpg'
import crime from '../images/crime.jpg'
import health from '../images/health.jpg'
import tech from '../images/tech.jpg'
import salad from '../images/salad.jpg'
import macaroons from '../images/macaroons.jpg'
import steak from '../images/steak.jpg'
import jellyBeans from '../images/jellyBeans.jpeg'
import knife from '../images/knife.jpg'
import computer from '../images/computer.jpg'
import thermometer from '../images/thermometer.jpeg'
import whoopee from '../images/whoopee.jpg'
import angry from '../images/angry.jpg'
import happy from '../images/happy.jpg'
import healthy from '../images/healthy.jpg'
import robot from '../images/robot.jpg'

class Quiz extends React.Component {

  state = {
    health: 0,
    crime: 0,
    tech: 0,
    comedy: 0,
    winner: null,
    div: 0
  }

  plusOne = (name) => (event)=> {
    if (this.state[name] >= 3) {
      this.setState({
        winner: name
      })
    }

    this.setState({
      [name]: this.state[name] + 1,
      div: this.state.div + 1
    })
  }

  render() {

    const genres = [
      {"health": 88},
      {"crime": 135},
      {"tech": 131},
      {"comedy": 133}
    ]

    let questionSlides = [
      [
      <div className="question-1">
        <p>Which of these images speaks to you?</p>
        <img src={comedy} alt="" onClick={this.plusOne("comedy")}/>
        <img src={crime} alt="" onClick={this.plusOne("crime")}/>
        <img src={health} alt="" onClick={this.plusOne("health")}/>
        <img src={tech} alt="" onClick={this.plusOne("tech")}/>
      </div>
      ],
      [
        <div className="question-2">
          <p>How are you feeling today?</p>
          <img src={happy} alt="" onClick={this.plusOne("comedy")}/>
          <img src={angry} alt="" onClick={this.plusOne("crime")}/>
          <img src={healthy} alt="" onClick={this.plusOne("health")}/>
          <img src={robot} alt="" onClick={this.plusOne("tech")}/>
        </div>
      ],
      [
        <div className="question-3">
          <p>What do you most want to eat</p>
          <img src={jellyBeans} alt="" onClick={this.plusOne("comedy")}/>
          <img src={steak} alt="" onClick={this.plusOne("crime")}/>
          <img src={salad} alt="" onClick={this.plusOne("health")}/>
          <img src={macaroons} alt="" onClick={this.plusOne("tech")}/>
        </div>
      ],
      [
        <div className="question-4">
          <p>What could you not live without?</p>
          <img src={whoopee} alt="" onClick={this.plusOne("comedy")}/>
          <img src={knife} alt="" onClick={this.plusOne("crime")}/>
          <img src={thermometer} alt="" onClick={this.plusOne("health")}/>
          <img src={computer} alt="" onClick={this.plusOne("tech")}/>
        </div>
      ]
    ]

    if (this.state.div > 3) {
      let something = genres.filter(genre => genre[this.state.winner])[0]
      let winner = Object.values(something)
      this.props.fetchRecommendedPodcasts(winner[0])
      return <Redirect to='/quizResults' />
    }

    return (
      <div className="quiz">
        {questionSlides[this.state.div]}
      </div>
    )
  }
}

export default Quiz
