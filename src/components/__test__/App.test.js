import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Button from "../Button";
import Display from "../Display";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("shows a display", () => {
  expect(wrapped.find(Display).length).toEqual(1);
});
it("shows buttons", () => {
  expect(wrapped.find(Button).length).toEqual(20);
});
