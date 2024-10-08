import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useKey } from "./hooks/useKey";

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
};

export default Search;
