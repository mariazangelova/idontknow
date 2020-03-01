import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Movie from "../components/Movie";

function sortByTitle(movieA, movieB) {
  return movieA.title.localeCompare(movieB.title);
}

function sortByYear(movieA, movieB) {
  return movieB.year - movieA.year;
}

export default function DiscoverMobiesPage() {
  const [searchText, setMovie] = useState("");
  const [sortBy, setSortBy] = useState("default");

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
    const queryParam = encodeURIComponent(params.searchtext);

    const data = await fetch(
      `https://omdbapi.com/?apikey=2bfe2d6&s=${queryParam}`
    ).then(r => r.json());

    let results = data.Search;
    let sortedMovies;
    sortBy === "title"
      ? (sortedMovies = [...results].sort(sortByTitle))
      : sortBy === "year"
      ? (sortedMovies = [...results].sort(sortByYear))
      : (sortedMovies = results);
    console.log("set sort by", sortedMovies);
    let display = [];
    display = sortedMovies.map(movie => (
      <Movie
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        id={movie.imdbID}
        key={movie.imdbID}
      />
    ));
    setSearchState(display);
  };

  useEffect(() => {
    search();
  }, [params.searchtext]);

  function changeSorting(event) {
    return setSortBy(event.target.value);
  }

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
      <select onChange={changeSorting}>
        <option value="default">Default</option>
        <option value="year">Sort by year</option>
        <option value="title">Sort by title</option>
      </select>
      <div>{searchState}</div>
      <p>
        {searchText ? (
          <div>Press on search when you finish typing ;)</div>
        ) : (
          <div>Not searching now</div>
        )}
      </p>
      <p>
        {!setSearchState ? (
          <div>Searching...</div>
        ) : (
          <div>{setSearchState}</div>
        )}
      </p>
    </div>
  );
}
