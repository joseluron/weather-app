const initialWeatherInformation = {
  fetched: false,
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
        fetched: true,
        weatherInformation: action.weatherInformation,
        updated: Date.now()
      };
    default:
      return {
          ...state
      };
  }
};

export default weatherInformation;