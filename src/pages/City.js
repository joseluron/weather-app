import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/City.scss';

const City = ({ weatherInformation }) => {
    const currentCity = useParams().slug;
    const currentCityObject = weatherInformation.weatherInformation.filter(city => city.cityName === currentCity)[0];
    console.log("current: ", currentCityObject);
    const currentCityMain = currentCityObject.data.main;
    console.log("Main: ", currentCityMain);

    const cityInfo = {
        feels_like: 'Feels like',
        temp_min: 'Min temperature',
        temp_max: 'Max temperature',
        pressure: 'Pressure',
        humidity: 'Humidity'
    }
    
    return (
        <>
            <div className="city-container">
                <div className="header-container">
                    <div className="navigation">
                        <Link to="/" data-testid="backButton">{"<"}</Link>  
                    </div>
                    <h1>{currentCity}</h1>
                </div>
                <div className="city-temp-container">
                    <span>{`Temp: ${currentCityObject.data.main.temp}°`}</span>
                    <img src={`http://openweathermap.org/img/wn/${currentCityObject.data.weather[0].icon}@2x.png`}/>
                </div>
                <div className="city-weather-container">
                    {Object.keys(cityInfo).map(key => {
                        return (
                            <div className="city-weather">
                                <h3>{`${cityInfo[key]}:`}</h3>
                                <span>{currentCityMain[key]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    weatherInformation: state.weatherInformation
  });

export default connect(mapStateToProps, {})(City);