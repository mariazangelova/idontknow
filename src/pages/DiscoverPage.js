import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Movie from "../components/Movie";

export default function DiscoverMobiesPage() {
  const [searchText, setMovie] = useState("");

  const [searchState, setSearchState] = useState("");
  const history = useHistory();
  const params = useParams();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  const search = async () => {
    if (params.searchtext === undefined) {
      return null;
    }
    //const queryParam = encodeURIComponent(searchText);
    console.log("??", params);
    const queryParam = encodeURIComponent(params.searchtext);

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

  useEffect(() => {
    search();
  }, [params.searchtext]);

  return (
    <div className="page">
      <h1>Discover some movies!</h1>
      <p>
        <input
          class="form-control mr-sm-2"
          type="search"
          aria-label="Search"
          value={searchText}
          onChange={e => setMovie(e.target.value)}
          placeholder="Type here :)"
        />
        <button
          class="btn btn-outline-success my-1 my-sm-0"
          type="submit"
          onClick={navigateToSearch}
        >
          Search
        </button>
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
