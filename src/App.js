import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverPage";
import NavBar from "./components/NavBar";

// function AboutPage () {
//   return <div></div>
// }

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
