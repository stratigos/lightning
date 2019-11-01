import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import pretty from "pretty";
import ShowTalk from "./ShowTalk";

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

it("wraps a Talk Component", () => {
  const talks = [
    {
      id: 16,
      title: "Hang On, I am Still Compiling Slides!"
    }
  ];

  act(() => {
    render(
      <MemoryRouter initialEntries={["/talks/16"]}>
        <ShowTalk talks={talks} />
      </MemoryRouter>,
      containerElement
    );
  });

  expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"container show-talk-container\\">
      <div class=\\"container talk-container\\">
        <div class=\\"talk-title\\">
          <h2>Hang On, I am Still Compiling Slides!</h2>
        </div>
        <div><a href=\\"/talks/16/edit\\"><button><span role=\\"img\\" aria-label=\\"edit talk 16\\">📝</span></button></a></div>
      </div>
    </div>"
  `);
});
