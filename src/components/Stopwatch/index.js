import {Component} from 'react'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isStart: false}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    this.clearInterval(timerId)
  }

  onStart = () => {
    this.setState({isStart: true})
  }

  tick = () => {
    const {seconds, isStart} = this.state
    if (isStart) {
      if (seconds === 59) {
        this.setState(prev => ({minutes: prev.minutes + 1, seconds: 0}))
      } else {
        this.setState(prev => ({seconds: prev.seconds + 1}))
      }
    }
  }

  onStop = () => {
    this.setState({isStart: false})
  }

  onReset = () => {
    this.setState({minutes: 0, seconds: 0, isStart: false})
  }

  render() {
    const {minutes, seconds, isStart} = this.state
    const minute = minutes > 9 ? minutes : `0${minutes}`
    const second = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div>
        <div>
          <h1>Stopwatch</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
            <h1>
              {minute}:{second}
            </h1>
            <button disabled={isStart} type="button" onClick={this.onStart}>
              Start
            </button>
            <button type="button" onClick={this.onStop}>
              Stop
            </button>
            <button type="button" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
