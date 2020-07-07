import React from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Search />
        <div className="about">
          <p>Service for searching an actor's filmography by name</p>
        </div>
      </div>
    </div>
  );
}

export default App;
