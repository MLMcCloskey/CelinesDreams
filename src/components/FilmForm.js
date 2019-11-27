import React, { Component } from 'react';
import TimeTable from './TimeTable';

class FilmForm extends Component {
  state = {
    movies: [],
    title: "",
    times: ""
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let movieArray = this.state.movies;
    movieArray.push({ title: this.state.title, times: this.state.times });
    console.log(movieArray);
    this.setState({ movies: movieArray });
    this.setState({ title: "", times: "" });
  }

  render() {
    return (
      <div className="filmForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
          <input type="text" id="title" value={this.state.title} onChange={this.handleChange}></input>
          </label>
          <label>
            Times:
          <input type="text" id="times" value={this.state.times} onChange={this.handleChange}></input>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        {this.state.movies.map(movie => 
            <TimeTable key={movie.title} title={movie.title} times={movie.times} />
          )}

      </div>
    );
  }
}

export default FilmForm;
