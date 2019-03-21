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
        <Display stats={this.state} />
      </div>
    );
  }

  strikeBehavior = () => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1,
        };
      });
    } else {
      this.setState({
        strikes: 0,
      });
    }
  };
  ballBehavior = () => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return {
          balls: prevState.balls + 1,
        };
      });
    } else {
      this.setState({ balls: 0 });
    }
  };
  foulBehavior = () => {
    console.log('Foul Clicked');
  };
  hitBehavior = () => {
    console.log('Hit Clicked');
  };
}
