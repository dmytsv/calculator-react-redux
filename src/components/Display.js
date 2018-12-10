import React from "react";

const Display = props => {
  return (
    <div style={styles.displayStyle} onClick={props.onClick}>
      {props.text}
    </div>
  );
};

const styles = {
  displayStyle: {
    color: "#000",
    width: 276,
    marginTop: 0,
    marginBottom: 10,

    backgroundColor: "#d1d1d1",
    textAlign: "right",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: "2rem",
    fontWeight: 800,
    float: "left",
    borderRadius: 10
  }
};

export default Display;
