import React from 'react';
import preload from '../data/movies.json';

const Search = React.createClass({
  render () {
    return (
      <div className=''>
        {preload.shows.map(show => <h3>{show.title}</h3>)}
      </div>
    );
  }
});

export default Search;
