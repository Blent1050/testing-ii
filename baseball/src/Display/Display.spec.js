import React from 'react';

//Display Component
import Display from './Display.js';

//Testing Libraries
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

const stats = {
  strikes: 1,
  balls: 2,
};

describe('<Display />', () => {
  it('displays the strikes', () => {
    const { getByTestId } = render(<Display stats={stats} />);
    const strikeCount = getByTestId('strikes').textContent;
    console.log(strikeCount);
    expect(strikeCount).toEqual(`Strikes: ${stats.strikes}`);
  });
  it('displays the balls', () => {
    const { getByTestId } = render(<Display stats={stats} />);
    const ballCount = getByTestId('balls').textContent;
    expect(ballCount).toEqual(`Balls: ${stats.balls}`);
  });
});
