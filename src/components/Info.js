import React from "react";

export default function Info(props) {
  return (
    <main class="container-fluid" class="row content">
      <div>
        <p></p>
        <img src={props.poster} />
      </div>
      <div class="col-sm-9">
        <p></p>
        <h1>{props.title}</h1>
        <h2>Year: {props.year}</h2>
        <h3>Genre: {props.genre}</h3>
        <h4>Director: {props.director}</h4>
        <p>Plot: {props.plot}</p>
      </div>
    </main>
  );
}
