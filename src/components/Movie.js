import React from "react";
//const route_parameters = useParams();
//import "./Movie.scss";

export default function Movie(props) {
  //const route_parameters = useParams();

  return (
    <div className="Movie">
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <img src={props.poster} />
    </div>
  );
}
