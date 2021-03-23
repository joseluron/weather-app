import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getWeatherInformation } from '../redux/actions/Weather';

const Home = ({ weatherInformation, getWeatherInformation }) => {
  useEffect(() => {
    getWeatherInformation();
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
              <div key={city.cityName}>
                <p>{city.cityName}</p>
                <span>{city.data.main.temp}</span>
              </div>
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