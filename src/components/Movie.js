import React from "react";
import { NavLink } from "react-router-dom";

//import "./Movie.scss";

export default function Movie(props) {
  return (
    <div className="Movie">
      <h3>
        <NavLink to={`/movie/${props.id}`}>{props.title}</NavLink>
      </h3>
      <h4>{props.year}</h4>
      <img src={props.poster} />
    </div>
  );
}
