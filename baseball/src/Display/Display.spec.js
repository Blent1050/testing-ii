import React from 'react';

//Display Component
import Display from './Display.js';

//Testing Libraries
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<Display />', () => {
  it('displays the strikes', () => {
    const { getByText } = render(<Display />);
    const text = getByText(/strikes:/i);
    expect(text).toBeInTheDocument();
  });
  it('displays the balls', () => {
    const { getByText } = render(<Display />);
    const text = getByText(/balls:/i);
    expect(text).toBeInTheDocument();
  });
});
