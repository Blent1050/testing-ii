import React from 'react';

export default function Display(props) {
  return (
    <>
      <p data-testid="balls">Balls: {props.stats.balls}</p>
      <p data-testid="strikes">Strikes: {props.stats.strikes}</p>
    </>
  );
}
