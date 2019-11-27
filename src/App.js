import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import TimeTable from './components/TimeTable';
import FilmForm from './components/FilmForm';

class App extends Component {
  state = {
    movies: [],
    title: "",
    times: ""
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-div">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        {/* <TimeTable title={"Star Wars"} times={"10, 7, 8"} /> */}
      </div>

    )
  }
}

export default App;
