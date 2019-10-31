import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import pretty from "pretty";
import Nav from "./Nav";

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

it("is expected to render navigation links", () => {
  act(() => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
      containerElement
    );
  });

  expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(`
    "<nav>
      <ul>
        <li><a href=\\"/\\"><span role=\\"img\\" aria-label=\\"home\\">⚡🗣</span></a></li>
        <li><a class=\\"App-link\\" href=\\"https://thoughtbot.com/san-francisco\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Visit thoughtbot</a></li>
      </ul>
    </nav>"
  `);
});
