import React, { Component } from 'react';

//Display component
import Display from '../Display/Display';

export default class Dashboard extends Component {
  state = {
    strikes: 0,
    balls: 0,
  };
  render() {
    return (
      <div>
        <button onClick={this.strikeBehavior}>Strike</button>
        <button onClick={this.ballBehavior}>Ball</button>
        <button onClick={this.foulBehavior}>Foul</button>
        <button onClick={this.hitBehavior}>Hit</button>
        <p>Balls: {this.state.balls}</p>
        <p>Strikes: {this.state.strikes}</p>
      </div>
    );
  }

  strikeBehavior = () => {
    this.setState(prevState => {
      return {
        strikes: prevState.strikes + 1,
      };
    });
  };
  ballBehavior = () => {
    console.log('Ball Clicked');
  };
  foulBehavior = () => {
    console.log('Foul Clicked');
  };
  hitBehavior = () => {
    console.log('Hit Clicked');
  };
}
