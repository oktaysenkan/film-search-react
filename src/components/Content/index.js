import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
export class Content extends Component {
  render() {
    const {
      error, fetching, fetched, payload,
    } = this.props;

    if (fetching) {
      return (
        <div className="container center-text">
          <h1>Loading...</h1>
        </div>
      );
    }

    if (error) {
      return (
        <div className="container center-text">
          <h1>{ error }</h1>
        </div>
      );
    }

    if (fetched) {
      return (
        <div className="container">
          <div className="title">
            <div className="rating">{payload.imdbRating}</div>
            <div className="film-name">{payload.Title}</div>
          </div>
          <div className="info">
            <div className="year">{payload.Year}</div>
            <div className="time">{payload.Runtime}</div>
            <div className="genre">{payload.Genre}</div>
          </div>
          <div className="plot">{payload.Plot}</div>
          <div className="actors">
            <b>Actors</b>
            <span>{payload.Actors}</span>
          </div>
          <div className="director">
            <b>Director</b>
            <span>{payload.Director}</span>
          </div>
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    searchText: state.search.searchText,
    fetching: state.search.fetching,
    fetched: state.search.fetched,
    payload: state.search.payload,
    error: state.search.error,
  };
}

export default connect(mapStateToProps)(Content);
