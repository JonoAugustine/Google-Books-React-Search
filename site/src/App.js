import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Search, Saved } from "./pages";
import api from "./api";

function App() {
  api.search("hentai");
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>
  );
}

export default App;
