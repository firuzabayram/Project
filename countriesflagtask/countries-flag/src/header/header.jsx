import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <div>
        <div className="world">
          <h1>Where in the world?</h1>

          <div className="darkmode">
            <h3>Dark Mode</h3>
            <i class="fa-regular fa-moon"></i>
          </div>
        </div>
        <hr />
        <div className="search">
            <div className="searchbutton">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Searc for a country..." /></div>
          <select>
            <option value="filter">Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
