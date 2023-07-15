/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AnimeCard from '../components/AnimationCard';

describe('AnimationCard component', () => {
  it('matches the snapshot', () => {
    // Render the AnimeCard component with the Redux store provided by the Provider
    const { container } = render(
      <Provider store={store}>
        <AnimeCard />
      </Provider>,
    );

    // Compare the rendered component with the snapshot
    expect(container).toMatchSnapshot();
  });
});
