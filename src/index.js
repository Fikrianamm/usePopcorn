import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      color="red"
      size={20}
      defaultRating={2}
      messages={["teribble", "bad", "okay", "good", "amazing"]}
    />
  </React.StrictMode>
);
