import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import pretty from "pretty";
import { TableHeader, TableBody, Table } from "./Table";

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

describe("TableHeader", () => {
  it("is expected to render a header for Talks and for actions", () => {
    act(() => {
      render(
        <table>
          <TableHeader />
        </table>,
        containerElement
      );
    });

    expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(`
      "<table>
        <thead class=\\"talk-table-head\\">
          <tr>
            <th>Talk</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>"
    `);
  });
});
