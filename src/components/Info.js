import React from "react";

export default function Info(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Year: {props.year}</h2>
      <h3>Genre: {props.genre}</h3>
      <h4>Director: {props.director}</h4>
      <img src={props.poster} />
      <p>Plot: {props.plot}</p>
    </div>
  );
}
