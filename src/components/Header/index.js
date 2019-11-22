import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMovie, fetchMovieLoaded, fetchMovieError } from '../../actions'
import './header.css'

export class Header extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      searchText: null
    }
  }

  searchInputOnSubmit = () => {
    this.props.dispatch(searchMovie(this.state.searchText))
    fetch('http://www.omdbapi.com/?apikey=e07755b7&t=' + decodeURI(this.state.searchText))
    .then(response => response.json()) 
    .then(json => {
      console.log(json.Response === "True");

      if (json.Response === "True") {
        this.props.dispatch(fetchMovieLoaded(json))
      } else {
        this.props.dispatch(fetchMovieError(json.Error))
      }
    })
    .catch(error => {
      this.props.dispatch(fetchMovieError(error.toString()))
    })
  }

  searchInputOnChanged = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  searchInputKeyPressed = (e) => {
    if (e.key === "Enter"){
      if (!this.state.searchText) {
        this.props.dispatch(fetchMovieError("Film adı boş bırakılamaz."))
      } else {
        this.searchInputOnSubmit()
      }
    }
  }

  render() {
    return (
      <div className="header">
        <input className="text-input" 
        onKeyPress={this.searchInputKeyPressed}
        onChange={this.searchInputOnChanged}  
        placeholder="Film ismini giriniz."
        type="text" />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
      search: state.search,
  }
}


export default connect(mapStateToProps)(Header)
