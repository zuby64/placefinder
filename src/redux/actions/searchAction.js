import { showMessage } from '../utils/errorHandler';
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SET_QUERY
} from './types/searchTypes';

export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: results,
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const fetchSearchResults = (query, callback) => {
  return async (dispatch) => {
    dispatch(searchRequest());

    try {
      // Make the API call here and get the results
      const results = await makeAPICall(query);

      // Dispatch the success action
      dispatch(searchSuccess(results));

      // Call the callback function with the results
      callback(results);
    } catch (error) {
      dispatch(searchFailure(error.message));
      showMessage('Error', error.message);
    }
  };
};

// Function to make the API call (replace with your actual API call implementation)
const makeAPICall = async (query) => {
  // Mock implementation, replace with your actual API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Result 1' },
        { id: 2, name: 'Result 2' },
        { id: 3, name: 'Result 3' },
      ]);
    }, 1000);
  });
};
