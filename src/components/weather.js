import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { useState } from 'react';
import { Component } from 'react';
import IconWeatherComponent from "./IconWeatherComponent";
import axios from 'axios'

const CardExampleCard = ({weatherData}) => (
  <Card id="card">
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <p className="day">{moment().format('dddd')}</p>
        <p className="temp">{weatherData.main.temp} &deg;C</p>
        <p className="description">{weatherData.weather[0].main}</p>
         <IconWeatherComponent icons={weatherData.icons}/>
    </Card.Content>
  </Card>
)


export default CardExampleCard;


