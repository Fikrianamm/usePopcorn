import React from "react";
import PropTypes from "prop-types";

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

export default Search;
