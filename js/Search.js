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
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <a className='navbar-brand' href='#'>vidflix</a>
            <form className='navbar-form navbar-right'>
              <div className='form-group'>
                <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} className='form-control' placeholder='Search' type='text' />
              </div>
            </form>
          </div>
        </nav>
        {preload.shows
          .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()))
          .map(show => <ShowCard key={show.mdbID} show={show} />)}
      </div>
    );
  }
});

export default Search;
