import PropTypes from "prop-types"; // Import prop-types

const WeatherDisplay = ({ weather }) => {
  const currentDate = new Date();
  // Format the date to "Thursday 10 May 2020"
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    weekday: "long", // full weekday name (e.g., 'Thursday')
    day: "2-digit", // two-digit day (e.g., '10')
    month: "long", // full month name (e.g., 'May')
    year: "numeric", // full year (e.g., '2020')
  });

  if (!weather)
    return (
      <p className="text-alert">
        <b>No weather data found.</b><br /> Please search for a city to get the weather information.
      </p>
    );

  return (
    <div className="weather-info">
      <h2 className="weather-title flex-aic">
        <span className="material-icons">location_on</span>
        {weather.name}
      </h2>

      {/* Show current date and time */}
      <p className="date">{formattedDate}</p>
      {/* Weather details */}
      <p className="temp">{weather.main.temp} °C</p>
      <p className="description">{weather.weather[0].description}</p>
      <div className="info-container">
        <div>
          <p className="humidity">
            <span className="material-icons">water_drop</span>
            humidity
          </p>
            {weather.main.humidity} %
            </div>
        <div>
          <p className="wind">
            <span className="material-icons">air</span>
            wind
          </p>
            {weather.wind.speed} m/s
            </div>
        <div>
          <p className="pressure">
            <span className="material-icons">speed</span>
            pressure
          </p>
            {weather.main.pressure} hPa
            </div>
      </div>
    </div>
  );
};

// Prop validation
WeatherDisplay.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default WeatherDisplay;
