import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "./Button";
import Display from "./Display";
import * as actions from "../actions";

class App extends Component {
  render() {
    return (
      <div style={styles.calcStyle}>
        <Display text={this.props.display.text} />
        <Button onClick={this.props.clear} text="C" />
        <Button onClick={this.props.addToMemory} text="M+" />
        <Button onClick={this.props.returnFromMemory} text="MR" />
        <Button onClick={this.props.clearMemory} text="MC" />

        <Button onClick={() => this.props.numberPressed("1")} text="1" />
        <Button onClick={() => this.props.numberPressed("2")} text="2" />
        <Button onClick={() => this.props.numberPressed("3")} text="3" />
        <Button onClick={() => this.props.operationPressed("*")} text="*" />

        <Button onClick={() => this.props.numberPressed("4")} text="4" />
        <Button onClick={() => this.props.numberPressed("5")} text="5" />
        <Button onClick={() => this.props.numberPressed("6")} text="6" />
        <Button onClick={() => this.props.operationPressed("/")} text="/" />

        <Button onClick={() => this.props.numberPressed("7")} text="7" />
        <Button onClick={() => this.props.numberPressed("8")} text="8" />
        <Button onClick={() => this.props.numberPressed("9")} text="9" />
        <Button onClick={() => this.props.operationPressed("+")} text="+" />

        <Button onClick={() => this.props.numberPressed("0")} text="0" />
        <Button onClick={this.props.dotPressed} text="." />
        <Button onClick={this.props.equals} text="=" />
        <Button onClick={() => this.props.operationPressed("-")} text="-" />
      </div>
    );
  }
}

const styles = {
  calcStyle: {
    backgroundColor: "#fafafa",
    width: 310,
    height: 427,
    marginTop: 20,

    marginLeft: "20%",
    marginRight: "20%",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.8)"
  }
};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(App);
