import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverPage";
import NavBar from "./components/NavBar";
import Movie from "./components/Movie";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/discover/:searchtext" component={DiscoverMoviesPage} />
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/movie/:imdb_id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
