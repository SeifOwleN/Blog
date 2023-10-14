import { useState } from "react";
import PropTypes from "prop-types";

const Toggleable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const changeVisiblity = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={changeVisiblity}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={changeVisiblity}>cancel</button>
      </div>
    </div>
  );
};
Toggleable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
export default Toggleable;