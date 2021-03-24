const CityPreview = ({ cityInformation }) => {
  return (
    <div className="city-wrapper">
      <h3>{cityInformation.cityName}</h3>
      {cityInformation.data ? (
        <>
          <span>{`Temp: ${cityInformation.data.main.temp}°`}</span>
          <img src={`http://openweathermap.org/img/wn/${cityInformation.data.weather[0].icon}@2x.png`} alt="Temp icon" />
        </>
      ) : (
        <span>No weather information for this city at the moment</span>
      )}
    </div>
  );
}

export default CityPreview;