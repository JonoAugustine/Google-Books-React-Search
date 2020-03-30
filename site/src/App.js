import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Search } from "./pages";
import api from "./api";

function App() {
  api.search("hentai");
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved"></Route>
      </Router>
    </div>
  );
}

export default App;
