import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './home.css'


function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((datacountry) => setData(datacountry), []);
  });
  
  return (
    <div className="umumi">
      <div className="card">
        {data.map((e, index) => {
          return (
            <div key={index}>
              <img src={e.flags.png} />
              <h2>{e.name}</h2>
              <h4>Population: {e.population}</h4>
              <h4>Region: {e.region}</h4>
              <h4>Capital: {e.capital}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;