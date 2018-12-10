import React from "react";

const Button = props => {
  return (
    <button style={styles.buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const styles = {
  buttonStyle: {
    margin: 2,
    width: 71,
    height: 71,
    float: "left",
    color: "#000",
    fontSize: "2rem",
    fontWeight: 800,
    textAlign: "center"
  }
};

export default Button;
