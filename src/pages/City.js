import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const City = ({ weatherInformation }) => {
    const currentCity = useParams().slug;
    const currentCityObject = weatherInformation.weatherInformation.filter(city => city.cityName === currentCity)[0];
    
    return (
        <>
            <Link to="/">{"<-"}</Link>
            <h1>{currentCity}</h1>
            <p>{currentCityObject.cityName}</p>
        </>
    );
}

const mapStateToProps = (state) => ({
    weatherInformation: state.weatherInformation
  });

export default connect(mapStateToProps, {})(City);