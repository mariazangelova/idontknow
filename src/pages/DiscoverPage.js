import React, { useState } from "react";
import Movie from "../components/Movie";

export default function DiscoverMobiesPage() {
  const [searchText, setMovie] = useState("");

  const [searchState, setSearchState] = useState("");

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);

    const data = await fetch(
      `https://omdbapi.com/?apikey=2bfe2d6&s=${queryParam}`
    ).then(r => r.json());

    console.log("Success!", data.Search);

    let results = data.Search;
    let display = [];
    display = results.map(movie => (
      <Movie
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        id={movie.imdbID}
      />
    ));
    setSearchState(display);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => setMovie(e.target.value)}
          placeholder="Type here :)"
        />
        <button onClick={search}>Search</button>
      </p>
      <div>{searchState}</div>
      <p>
        {searchText ? (
          <div>Press on search when you finish typing ;)</div>
        ) : (
          <div>Not searching now</div>
        )}
      </p>
      <div>{setSearchState}</div>
    </div>
  );
}
