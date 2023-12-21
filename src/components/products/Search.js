import React from "react";
import { Outlet } from "react-router-dom";

function Search() {
  return (
    <div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" class="searchButton">
            &#128270;
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Search;
