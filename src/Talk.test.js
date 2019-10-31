import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import pretty from "pretty";
import Talk from "./Talk";

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

it("is expected to render Talk data, and a link to edit the Talk", () => {
  const talkRecord = {
    id: 12345,
    title: "Studies Show that Familiarity Prevails over Reason"
  };

  act(() => {
    render(
      <MemoryRouter>
        <Talk talkRecord={talkRecord} />
      </MemoryRouter>,
      containerElement
    );
  });

  expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"container talk-container\\">
      <div class=\\"talk-title\\">
        <h2>Studies Show that Familiarity Prevails over Reason</h2>
      </div>
      <div><a href=\\"/talks/12345/edit\\"><button><span role=\\"img\\" aria-label=\\"edit talk 12345\\">📝</span></button></a></div>
    </div>"
  `);
});
