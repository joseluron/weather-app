import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWeatherInformation } from '../redux/actions/Weather';

import '../styles/Home.scss';
import CityPreview from '../components/CityPreview';

const Home = ({ weatherInformation, getWeatherInformation }) => {
  useEffect(() => {
    if(!weatherInformation.fetched && !weatherInformation.fetching) {
      getWeatherInformation();
      setInterval(() => {
        getWeatherInformation();
      }, 60000);
    }
  });

  if (!weatherInformation.fetched) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="home-container">
        <h1>Weather App</h1>
        {weatherInformation.weatherInformation.length &&
          <div className="cities-weather-container">
            {weatherInformation.weatherInformation.map(city => {
              return (
                <Link to={`/city/${city.cityName}`} key={city.cityName}>
                  <CityPreview cityInformation={city} />
                </Link>
              );
            })}
            <span className="updated">{`Updated: ${new Date(weatherInformation.updated).toLocaleString()}`}</span>
          </div>
        }
        {!weatherInformation.weatherInformation.length &&
          <h3>No weather information to show at the moment. Please, try again later</h3>
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  weatherInformation: state.weatherInformation
});

export default connect(mapStateToProps, {getWeatherInformation})(Home);