import PropsTypes from "prop-types";

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}

ErrorMessage.proptype = {
  message: PropsTypes.string.isRequired,
};

export default ErrorMessage;
