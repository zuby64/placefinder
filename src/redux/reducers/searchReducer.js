import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SET_QUERY
} from '../types/searchTypes';

const initialState = {
  results: [],
  loading: false,
  error: null,
  query: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        loading: false,
        error: null,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
