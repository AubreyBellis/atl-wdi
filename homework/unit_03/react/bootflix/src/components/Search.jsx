import React from 'react';
import Movie from './Movie';

// Update the forms to utilize methods being passed down from App.js
const Search = () => {
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" method="get">
          <input type="text" name="title" placeholder="Enter movie title" />
          {/* <input onClick={this.props.searchByTitle} type="button" value="Search for this title" />         */}
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" method="get">
          <input type="text" name="id" placeholder="Enter omdb movie ID" />
          <input type="submit" value="Search by ID" />
        </form>
         {/* <Movie movie={this.props.movie}/>  */}
      </div>
    </section>
  );
};

export default Search;