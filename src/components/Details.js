import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Info from "./Info";

export default function Details(props) {
  const routerParams = useParams();
  const [movieData, set_movieData] = useState(routerParams.imdb_id);

  const displayInformation = async () => {
    const information = await fetch(
      `https://omdbapi.com/?apikey=2bfe2d6&i=${movieData}`
    ).then(r => r.json());
    set_movieData(information);
    console.log("info", information);
  };
  useEffect(() => {
    async function fetchData() {
      displayInformation();
    }
    fetchData();
  }, []);

  console.log("data", movieData);

  return (
    <div>
      {set_movieData}
      <Info
        title={movieData.Title}
        year={movieData.Year}
        poster={movieData.Poster}
        id={movieData.imdbID}
        genre={movieData.Genre}
        director={movieData.Director}
        plot={movieData.Plot}
      />
    </div>
  );
}

// let showInfo = [];
//     // showInfo = information.map(info => (

//   <Info
//     title={info.Title}
//     year={info.Year}
//     poster={info.Poster}
//     id={info.imdbID}
//   />
// ));

//     set_movieData(showInfo);
