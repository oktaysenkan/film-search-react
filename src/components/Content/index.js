import React, { Component } from 'react'
import { connect } from 'react-redux'
import './content.css';

export class Content extends Component {

  render() {
    const { error, fetching, fetched, payload } = this.props;
    console.log(this.props);
    

    if (fetching) {
      return(
      <div className="container">
        <h1>Loading...</h1>
      </div>
        )
    }

    else if (error) {
      return(<div className="container">
        <h1>{ error }</h1>
        </div>)
    }

    else if (fetched) {
      return(
        <div className="container">
          <div className="title">
            <div className="rating">{ payload.imdbRating }</div>
            <div className="film-name">
            {payload.Title}
            </div>
          </div>
          <div className="info">
            <div className="year">
              { payload.Year }
            </div>
            <div className="time">
              { payload.Runtime }
            </div>
            <div className="genre">
              { payload.Genre }
            </div>
          </div>
          <div className="plot">
            { payload.Plot }
          </div>
          <div className="actors">
            <b>Actors</b>
            <span>{ payload.Actors }</span>
          </div>
          <div className="director">
            <b>Director</b>
            <span>{ payload.Director }</span>
          </div>
        </div>
      )
    }

    else return (<div></div>)

  }
}

function mapStateToProps(state){
  return {
      searchText: state.search.searchText,
      fetching: state.search.fetching,
      fetched: state.search.fetched,
      payload: state.search.payload,
      error: state.search.error,
  }
}

export default connect(mapStateToProps)(Content)
