import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import axios from 'axios'
export default function App() {
        
  const cities = [{
    name: 'OTTAWA',
    latitude: '45.4247',
    lognitude: '-75.6950'
  }, {
    name: 'MONTREAL',
    latitude: '45.5017',
    lognitude: '-73.5673'
  }];

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const handleCurrentCity = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }

  const handleClick = (index) => {
    setLat(cities[index].latitude);
    setLong(cities[index].lognitude);
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  

  return (
    <>
      <div style={{alignitems: "center", backgroundColor:"#ebf3fb", fontfamily: "Trebuchet MS", fontWeight: "bold", justifyContent: "space-between", whitespace: "pre-wrap"}}>
      <b id="currentCity" onClick={handleCurrentCity}>
        CURRENT CITY{'\t'}
      </b>

      {cities.map((city, index) =>
        <b id="altCity" key={index} onClick={() => handleClick(index)}>
          {city.name}{'\t'}
        </b>
      )}
    </div>

      <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <div></div>
        )}

      </div>
      
    </>
  );
}
