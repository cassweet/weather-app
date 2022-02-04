import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faRain } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMist } from '@fortawesome/free-solid-svg-icons'
import { faClear } from '@fortawesome/free-solid-svg-icons'
import { faSnow } from '@fortawesome/free-solid-svg-icons'

const icons =  {
            Thunderstorm: "faThunderstorm",
            Drizzle: "faRain",
            Rain: "faRain",
            Snow: "faSnow", 
            Atmosphere: "wi-fog",
            Clear: "faSun",
            Clouds: "faCloud"
        } 

function IconWeatherComponent({icons}) {
	
	let [svg, setSvg] = useState('');
		
	useEffect(() => {
		const setIcon = () => {
			if (icons === '01d') {
				setSvg('{Clear}')
			}
			if (icons === '02d') {
				setSvg('{Clouds}')
			}
			if (icons === '02n') {
				setSvg('{Clouds}')
			}
			if (icons === '03d' || icons === '03n' || icons === '04d' || icons === '04n') {
				setSvg('{Clouds}')
			}
			if (icons === '09d' || icons === '09n') {
				setSvg('{Rain}')
			}
			if (icons === '10d' || icons === '10n') {
				setSvg('{Rain}')
			}
			if (icons === '11d' || icons === '11n') {
				setSvg('{Thunderstorm}')
			}
			if (icons === '13d' || icons === '13n') {
				setSvg('{Snow}')
			}
			if (icons === '50d' || icons === '50n') {
				setSvg('{Clouds}')
			}
		}
		setIcon();
	}, [icons])
	
	
	return (
		<div>
			<img src={'${icons}'} width="110" height="110" alt=""/>
		</div>
	);
}

export default IconWeatherComponent