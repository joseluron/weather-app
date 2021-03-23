import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWeatherInformation } from '../redux/actions/Weather';

const Home = ({ weatherInformation, getWeatherInformation }) => {
  useEffect(() => {
    if(!weatherInformation.fetched && !weatherInformation.fetching) {
      getWeatherInformation();
    }
  }, []);

  if (weatherInformation.fetching) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Weather App</h1>
      {weatherInformation &&
        <div>
          {weatherInformation.weatherInformation.map(city => {
            return (
              <Link to={`/city/${city.cityName}`} key={city.cityName}>
                <p>{city.cityName}</p>
                <span>{city.data.main.temp}</span>
              </Link>
            );
          })}
        </div>
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  weatherInformation: state.weatherInformation
});

export default connect(mapStateToProps, {getWeatherInformation})(Home);