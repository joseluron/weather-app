import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWeatherInformation } from '../redux/actions/Weather';

import '../styles/Home.scss';

const Home = ({ weatherInformation, getWeatherInformation }) => {
  useEffect(() => {
    if(!weatherInformation.fetched && !weatherInformation.fetching) {
      getWeatherInformation();
      setInterval(() => {
        getWeatherInformation();
      }, 60000);
    }
  }, []);

  if (!weatherInformation.fetched) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="home-container">
        <h1>Weather App</h1>
        {weatherInformation &&
          <div className="cities-weather-container">
            {weatherInformation.weatherInformation.map(city => {
              return (
                <Link to={`/city/${city.cityName}`} key={city.cityName}>
                  <div className="city-wrapper">
                    <h3>{city.cityName}</h3>
                    <span>{`Temp: ${city.data.main.temp}°`}</span>
                    <img src={`http://openweathermap.org/img/wn/${city.data.weather[0].icon}@2x.png`}/>
                  </div>
                </Link>
              );
            })}
            <span className="updated">{`Updated: ${new Date(weatherInformation.updated).toLocaleString()}`}</span>
          </div>
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  weatherInformation: state.weatherInformation
});

export default connect(mapStateToProps, {getWeatherInformation})(Home);