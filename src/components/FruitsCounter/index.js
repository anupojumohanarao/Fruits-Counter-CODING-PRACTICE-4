// Write your code here
import {Component} from 'react'
import './index.css'

class FruitCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementMango = () => {
    this.setState(prevState => {
      console.log(`previous mango value ${prevState.mango}`)
      return {mango: prevState.mango + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevState => {
      console.log(`previous banana value ${prevState.banana}`)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="main-bg-container">
        <div className="main-card-container">
          <h1 className="main-heading">
            Bob ate <span className="digit-yellow">{mango} </span>mangoes{' '}
            <span className="digit-yellow">{banana} </span>bananas
          </h1>
          <div className="image-card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image1"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image2"
            />
          </div>
          <div className="button-card-container">
            <button
              type="button"
              onClick={this.onIncrementMango}
              className="fruit-button1"
            >
              Eat Mango
            </button>
            <button
              type="button"
              onClick={this.onIncrementBanana}
              className="fruit-button2"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
