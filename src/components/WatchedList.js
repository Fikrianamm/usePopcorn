import React from "react";
import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

WatchedList.propTypes = {
  watched: PropTypes.array.isRequired,
};

export default WatchedList;
