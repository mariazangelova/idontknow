import React, { useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");

  function writeComment(event) {
    setComment(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addComment(comment);
    setComment("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Share an opinion</p>
        <input value={comment} onChange={writeComment} />
        <input type="submit" />
      </form>
    </div>
  );
}
