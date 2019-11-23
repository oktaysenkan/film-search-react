const axios = require('axios').default;

const http = axios.create({
  baseURL: 'http://www.omdbapi.com',
});

export const searchMovie = (searchText) => (dispatch) => {
  dispatch(fetchMovieStarted());

  http.get(`/?apikey=e07755b7&t=${decodeURI(searchText)}`)
    .then((response) => {
      if (response.data.Response === 'True') {
        dispatch(fetchMovieLoaded(response.data));
      } else {
        dispatch(fetchMovieError(response.data.Error));
      }
    })
    .catch((error) => {
      dispatch(fetchMovieError(error.toString()));
    });
};

export const fetchMovieStarted = () => ({
  type: 'FETCH_MOVIE_STARTED',
});

export const fetchMovieLoaded = (payload) => ({
  type: 'FETCH_MOVIE_LOADED',
  payload,
});

export const fetchMovieError = (error) => ({
  type: 'FETCH_MOVIE_ERROR',
  error,
});
