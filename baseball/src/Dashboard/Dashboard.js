import React, { Component } from 'react';

//Display component
import Display from '../Display/Display';

export default class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
  };
  render() {
    return (
      <div>
        <button onClick={this.strikeBehavior}>Strike</button>
        <button onClick={this.ballBehavior}>Ball</button>
        <button onClick={this.foulBehavior}>Foul</button>
        <button onClick={this.hitBehavior}>Hit</button>
        <Display />
      </div>
    );
  }

  strikeBehavior = () => {
    console.log('Strike clicked');
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
