import React from 'react';
import '../App.css';

function TimeTable(props) {
  return (
    <div className="timeTable">
      <h1>Movie: {props.title}</h1>
      <p>Times: {props.times}</p>
    </div>
  );
}

export default TimeTable;
