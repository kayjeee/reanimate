/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('sheba renda', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );

  // No assertions needed as the test is focused on rendering without errors
});
