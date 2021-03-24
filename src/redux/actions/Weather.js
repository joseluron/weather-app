import axios from 'axios';

import barcelona from '../../utils/barcelona.json';
import sanFrancisco from '../../utils/sanFrancisco.json';
import londres from '../../utils/londres.json';
import paris from '../../utils/paris.json';

const cities = ['Barcelona', 'San Francisco', 'London', 'Paris'];

const obtainCityQuery = cityName => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1dd204628a727f5f68ac7f428820c128`;
};

const getCityMock = cityName => {
    switch(cityName) {
      case 'Barcelona':
        return new Promise((resolve) => resolve(barcelona));
      case 'San Francisco':
        return new Promise((resolve) => resolve(sanFrancisco));
      case 'London':
        return new Promise((resolve) => resolve(londres));
      case 'Paris':
        return new Promise((resolve) => resolve(paris));
    }
  }

const fetchWeatherInformation = () => {
    return {
        type: 'FETCHING_WEATHER_INFORMATION'
    };
};

const fetchedWeatherInformation = weatherInformation => {
    return {
        type: 'FETCHED_WEATHER_INFORMATION',
        weatherInformation
    };
};

export const getWeatherInformation = () => async(dispatch) => {
    dispatch(fetchWeatherInformation());
    
    const weatherInformation = cities.map(async (cityName) => {
        const fetchedWeatherInfo = await axios.get(obtainCityQuery(cityName));
        // Mock data
        // const fetchedWeatherInfo = await getCityMock(cityName)

        let cityWeatherInfo = {
            cityName,
            fetched: false
        };

        if (fetchedWeatherInfo.status === 200) {
            cityWeatherInfo = {
                ...cityWeatherInfo,
                data: fetchedWeatherInfo.data,
                updated: Date.now()
            }
        }

        return cityWeatherInfo;
    });

    const promisedWeatherInfo = await Promise.all(weatherInformation);

    console.log(promisedWeatherInfo);
    dispatch(fetchedWeatherInformation(promisedWeatherInfo));
};