import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Patience from "./Patience";

let containerElement = null;

beforeEach(() => {
  containerElement = document.createElement("div");
  document.body.appendChild(containerElement);
});

afterEach(() => {
  unmountComponentAtNode(containerElement);
  containerElement.remove();
  containerElement = null;
});

it("is expected to render an indicator to wait", () => {
  act(() => {
    render(<Patience />, containerElement);
  });

  expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(
    `"<span role=\\"img\\" aria-label=\\"please wait for internet\\">⏳</span>"`
  );
});
