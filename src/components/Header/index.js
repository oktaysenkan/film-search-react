import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovieError } from '../../actions';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
    };

    this.searchInputKeyPressed = this.searchInputKeyPressed.bind(this);
    this.searchInputOnChanged = this.searchInputOnChanged.bind(this);
  }

  searchInputOnSubmit() {
    const { dispatch } = this.props;
    const { searchText } = this.state;
    dispatch(searchMovie(searchText));
  }

  searchInputOnChanged(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  searchInputKeyPressed(e) {
    const { dispatch } = this.props;
    const { searchText } = this.state;

    if (e.key === 'Enter') {
      if (!searchText) {
        dispatch(fetchMovieError('Film adı boş bırakılamaz.'));
        return;
      }

      this.searchInputOnSubmit();
    }
  }

  render() {
    return (
      <div className="header">
        <input
          className="text-input"
          onKeyPress={this.searchInputKeyPressed}
          onChange={this.searchInputOnChanged}
          placeholder="Ara"
          type="text"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
  };
}

export default connect(mapStateToProps)(Header);
