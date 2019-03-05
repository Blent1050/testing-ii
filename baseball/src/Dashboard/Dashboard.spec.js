import React from 'react';

//Dashboard Component
import Dashboard from './Dashboard.js';
//Testing Libraries
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<Dashboard />', () => {
  describe('Strike Behavior', () => {
    it('adds a strike', () => {
      const state = {
        strikes: 0,
        balls: 0,
      };
      const { getByText } = render(<Dashboard state={state} />);
      const strikeButton = getByText(/strike/i);

      fireEvent.click(strikeButton);
      expect(getByText(/strike/i)).toBeInTheDocument();

      const players = [{ id: 1, name: 'Nate' }, { id: 2, name: 'Kayanna' }];
      const { getByTestId } = render(<Dashboard state={state} />);
    });
  });
});
