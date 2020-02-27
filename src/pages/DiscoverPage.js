import React, { useState } from "react";

export default function DiscoverMobiesPage() {
  const [searchText, setMovie] = useState("");

  const [searchState, setSearchState] = useState("searching");

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);

    const data = await fetch(
      `https://omdbapi.com/?apikey=2bfe2d6&s=${queryParam}`
    ).then(r => r.json());

    console.log("Success!", data.Search);

    let results = data.Search;
    let display = results.map(movie => [movie.Title, movie.Year, movie.Poster]);
    setSearchState(display);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => setMovie(e.target.value)}
          placeholder="Type here or just stare at the screen."
        />
        <button onClick={search}>Search</button>
      </p>
      <div>{searchState}</div>
      <p>
        {searchText ? (
          <div>Wait a second!</div>
        ) : (
          <div>Not searching actually</div>
        )}
      </p>
      <div>{setSearchState}</div>
    </div>
  );
}
