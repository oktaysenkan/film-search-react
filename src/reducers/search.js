const defaultState = { fetching: false, fetched: false, payload: {} };

const search = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return ({
        ...state,
        searchText: action.searchText,
      });
    case 'FETCH_MOVIE_STARTED':
      return ({
        ...state,
        fetching: true,
      });
    case 'FETCH_MOVIE_LOADED':
      return ({
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        payload: action.payload,
      });
    case 'FETCH_MOVIE_ERROR':
      return ({
        ...state,
        fetching: false,
        fetched: false,
        error: action.error,
      });
    default:
      return (state);
  }
};

export default search;
