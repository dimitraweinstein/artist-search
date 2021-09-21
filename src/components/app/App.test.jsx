import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('Artist Search App', () => {
  it('should render app file', async () => {
    render(<App />);

    screen.getByText('Loading...');
  });
});
