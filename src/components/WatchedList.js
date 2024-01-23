import React from "react";
import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

WatchedList.propTypes = {
  watched: PropTypes.array,
  onDeleteWatched: PropTypes.func.isRequired,
};

export default WatchedList;
