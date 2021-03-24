import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/City.scss';

const City = ({ weatherInformation }) => {
    const currentCity = useParams().slug;
    const currentCityObject = weatherInformation.weatherInformation.filter(city => city.cityName === currentCity)[0];
    
    return (
        <>
            <div className="city-container">
                <div className="header-container">
                    <div className="navigation">
                        <Link to="/">{"<"}</Link>  
                    </div>
                    <h1>{currentCity}</h1>
                </div>
                <p>{currentCityObject.cityName}</p>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    weatherInformation: state.weatherInformation
  });

export default connect(mapStateToProps, {})(City);