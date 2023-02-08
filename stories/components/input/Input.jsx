import PropTypes from "prop-types";
import "./input.css";

export const Input = ({}) => {
  // const mode = primary
  //   ? "storybook-button--primary"
  //   : "storybook-button--secondary";
  return (
    <input className={"storybook-input"} placeholder="" />
  );
};

Input.PropTypes = {
  primary: PropTypes.bool,
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
};
