import React from "react";
import iconSearch from "../assets/icon-search.svg";

export default function SearchBar() {
  return (
    <div className="searchContainer">
      <img src={iconSearch} alt="" />
      <input type="text" placeholder="Search GitHub username…" />
      <button>Search</button>
    </div>
  );
}
