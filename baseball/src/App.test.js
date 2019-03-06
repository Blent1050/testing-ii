import React from 'react';

import App from './App';

//Testing
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
