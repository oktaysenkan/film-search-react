export const searchMovie = searchText => ({
  type: 'SEARCH_MOVIE',
  searchText
})

export const fetchMovieLoaded = payload => ({
  type: 'FETCH_MOVIE_LOADED',
  payload
})

export const fetchMovieError = error => ({
  type: 'FETCH_MOVIE_ERROR',
  error
})