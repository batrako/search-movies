
import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MovieList } from './components/MoviesList';

class App extends Component {
  state = { results: [ ]}
  _handleResults =  (results) => {
    this.setState( {results} )
  }
  
  render () {
    return (
      <div className="App">
        <Title> Search movies </Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults = { this._handleResults }/>
        </div>
        { this.state.results.length === 0 
          ? <p> Sin resultados</p>
          : <MovieList movies={this.state.results} />
        }
      </div>
    )
  }
}

export default App;
