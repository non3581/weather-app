import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity(""); // Clear input after search
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
      >
        <span className="material-icons">search</span>
        Search
      </button>
    </div>
  );
};

// Prop validation for onSearch
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch should be a required function
};

export default SearchBar;
