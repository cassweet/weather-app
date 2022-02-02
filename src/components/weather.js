import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faRain } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMist } from '@fortawesome/free-solid-svg-icons'
import { faClear } from '@fortawesome/free-solid-svg-icons'


const CardExampleCard = ({weatherData}) => (
  <Card id="card">
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <p className="day">{moment().format('dddd')}</p>
        <p class="temp">{weatherData.main.temp} &deg;C</p>
        <p class="description">{weatherData.weather[0].main}</p>
    </Card.Content>
  </Card> 
)

export default CardExampleCard;


