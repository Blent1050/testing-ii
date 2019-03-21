import React from 'react';

export default function Display(props) {
  return (
    <>
      <p>
        Balls: <span data-testid="balls">{props.stats.balls}</span>
      </p>
      <p>
        Strikes: <span data-testid="strikes">{props.stats.strikes}</span>
      </p>
    </>
  );
}
