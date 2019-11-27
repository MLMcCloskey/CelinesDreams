import React, { Component } from 'react';
import Header from './components/Header';
import FilmForm from './components/FilmForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-div">
          <h1>Movie Form</h1>
          <p>
            Enter new movie and showtimes
          </p>
          <FilmForm />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </div>
      </div>

    )
  }
}

export default App;
