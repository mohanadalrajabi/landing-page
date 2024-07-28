import PropTypes from "prop-types";

const Button = ({ label, handleClick, styles }) => {
  return (
    <button
      className="px-8 py-1"
      onClick={handleClick}
      style={{ ...styles }}
    >
      {label}
    </button>
  );
};

const handleClick = () => {
  window.open("https://www.google.com", "_blank");
};

// Define prop types for Button component
Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  styles: PropTypes.object,
};

// Provide default props for optional props
Button.defaultProps = {
  label: "Click me",
  handleClick: handleClick,
  styles: {
    color: "white",
    "background-color": "rgba(17, 27, 71, 1)",
    // "margin-left": "20px",
    // "margin-right": "20px",
  },
};

export default Button;
