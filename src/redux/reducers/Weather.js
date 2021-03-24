import AppConstants from '../../App.constants';

const initialWeatherInformation = {
  fetched: false,
  fetching: false,
  weatherInformation: []
};

const weatherInformation = (state = initialWeatherInformation, action) => {
  switch(action.type) {
    case AppConstants.FETCHING_WEATHER_INFORMATION:
      return {
        ...state,
        fetching: true
      };
    case AppConstants.FETCHED_WEATHER_INFORMATION:
      return {
        ...state,
        fetching: false,
        fetched: true,
        weatherInformation: action.weatherInformation,
        updated: Date.now()
      };
    case AppConstants.ERASE_WEATHER_INFORMATION:
      return {
        ...state,
        weatherInformaton: []
      }
    default:
      return {
          ...state
      };
  }
};

export default weatherInformation;