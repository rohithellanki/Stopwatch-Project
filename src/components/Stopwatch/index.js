// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  tick = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  onClickStart = () => {
    this.setTimer = setInterval(this.tick, 1000)
  }

  onReset = () => {
    this.setState({timer: 0})
  }

  onStop = () => {
    clearInterval(this.setTimer)
  }

  renderSeconds = () => {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="main-container">
        <div className="internal-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-logo"
                alt="stopwatch"
              />
              <p className="timer-heading"> Timer</p>
            </div>
            <h1 className="timer"> {time}</h1>
            <div className="button-container">
              <button
                className="btn start"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button className="btn stop" type="button" onClick={this.onStop}>
                Stop
              </button>
              <button
                className="btn reset"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
