import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
// import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: '',
      id: ''
    }
  }

   componentWillMount(){
     this._searchByTitle();
     this._searchById();
   }
  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = () => {
    axios.get('http://omdbapi.com/?i=tt2294629&apikey=d31f1a94')
      .then((res) => {
        this.setState({movie: res.data.Title})
      })
  }

  _searchById = () => {
    console.log("Search by ID");
    axios.get('http://omdbapi.com/?i=tt2294629&apikey=d31f1a94')
      .then((res) => {
        this.setState({id: res.data.imdbID})
      })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById} movie={this.state.movie}/>
        <Movie movie={this.state.movie}/>
      </div>
    );
  }
}

export default App;
