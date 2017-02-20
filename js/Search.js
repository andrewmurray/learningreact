import React from 'react';

import ShowCard from './Showcard';

import preload from '../data/movies.json';

const Search = React.createClass({
  render () {
    return (
      <div className=''>
        {preload.shows.map(show => <ShowCard key={show.mdbID} show={show} />)}
      </div>
    );
  }
});

export default Search;
