import React from 'react';

//Dashboard Component
import Dashboard from './Dashboard.js';
import Display from '../Display/Display';
//Testing Libraries
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

const stats = {
  strikes: 0,
  balls: 0,
};

describe('<Dashboard />', () => {
  const { getByText } = render(<Dashboard />);
  const { getByTestId } = render(<Display stats={stats} />);

  //Strike variables
  const strikeButton = getByText(/strike/i);
  const strikeCount = getByTestId('strikes');
  //Ball Variables
  const ballButton = getByText(/ball/i);
  const ballCount = getByTestId('balls');

  describe('Strike Behavior', () => {
    it('adds a strike', () => {
      expect(strikeCount.textContent).toBe('0');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('1');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('2');
      fireEvent.click(strikeButton);
      expect(strikeCount.textContent).toBe('3');
    });
  });
  describe('Ball Behavior', () => {
    it('adds a ball', () => {
      expect(ballCount.textContent).toBe('0');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('1');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('2');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('3');
      fireEvent.click(ballButton);
      expect(ballCount.textContent).toBe('4');
    });
  });
});
