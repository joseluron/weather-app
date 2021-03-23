const initialWeatherInformation = {
  fetching: false,
  weatherInformation: []
};

const weatherInformation = (state = initialWeatherInformation, action) => {
  switch(action.type) {
    case 'FETCHING_WEATHER_INFORMATION':
      return {
        ...state,
        fetching: true
      };
    case 'FETCHED_WEATHER_INFORMATION':
      return {
        ...state,
        fetching: false,
        weatherInformation: action.weatherInformation
      };
    default:
      return {
          ...state
      };
  }
};

export default weatherInformation;