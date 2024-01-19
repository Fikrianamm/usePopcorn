import React from "react";
import PropTypes from "prop-types";

function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

NumResult.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default NumResult;
