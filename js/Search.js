import React from 'react';

import ShowCard from './Showcard';

import preload from '../data/movies.json';

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    };
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value});
  },
  render () {
    return (
      <div className=''>
        <header>
          <h1>vidflix</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} placeholder='Search' type='text' />
        </header>
        {preload.shows
          .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()))
          .map(show => <ShowCard key={show.mdbID} show={show} />)}
      </div>
    );
  }
});

export default Search;
