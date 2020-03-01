import React, { useState } from "react";
import Comment from "./Comment";

export default function Info(props) {
  const [comments, setDisplay] = useState([]);

  function addComment(comment) {
    const newComment = { id: comments.lenght + 1, comment: comment };
    const moreComments = [...comments, newComment];
    console.log("more comment", moreComments);
    setDisplay(moreComments);
  }
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
        <button>&hearts;</button>
        <Comment addComment={addComment} />
        <br />
        {comments.map(publish => (
          <p>
            {publish.id} {publish.comment}
          </p>
        ))}
      </div>
    </main>
  );
}
