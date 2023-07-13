/**
 * @jest-environment jsdom
 */
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAnimeById } from '../redux/anime/AnimeSlice';

// Create a mock store with Redux middleware
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('fetchAnimeById', () => {
  beforeEach(() => {
    // Clear the actions of the mock store before each test
    store.clearActions();
  });

  it('fetch anime and return anime', async () => {
    const animeId = '123';
    const expectedAnimeData = {
      id: animeId,
      title: 'Test Anime',
      description: 'anime test',
    };

    // Mock the axios.get function to return a resolved Promise with the expected anime data
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: {
        data: {
          id: animeId,
          attributes: { ...expectedAnimeData },
        },
      },
    });

    // Dispatch the fetchAnimeById action
    await store.dispatch(fetchAnimeById(animeId));

    // Compare the actions dispatched by the store with the snapshot
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should handle error if anime fetch by ID fails', async () => {
    const animeId = '123';

    // Mock the axios.get function to return a rejected Promise with an error
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Anime fetch failed'));

    // Dispatch the fetchAnimeById action
    await store.dispatch(fetchAnimeById(animeId));

    // Compare the actions dispatched by the store with the snapshot
    expect(store.getActions()).toMatchSnapshot();
  });
});
