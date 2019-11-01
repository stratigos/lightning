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

describe("TableBody", () => {
  it("is expected to render link to show page, and button to delete", () => {
    const talks = [
      {
        id: 12345,
        title: "Top 10 Clickbait Titles in Test Suites"
      },
      {
        id: 54321,
        title: "Overcoming JavaScript Fatigue"
      }
    ];

    const removeTalk = () => null;

    act(() => {
      render(
        <MemoryRouter>
          <table>
            <TableBody talks={talks} removeTalk={removeTalk} />
          </table>
        </MemoryRouter>,
        containerElement
      );
    });

    expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(`
      "<table>
        <tbody>
          <tr class=\\"talk-table-row\\">
            <td><a href=\\"/talks/12345\\">Top 10 Clickbait Titles in Test Suites</a></td>
            <td><button><span role=\\"img\\" aria-label=\\"remove-talk\\">🗑</span></button></td>
          </tr>
          <tr class=\\"talk-table-row\\">
            <td><a href=\\"/talks/54321\\">Overcoming JavaScript Fatigue</a></td>
            <td><button><span role=\\"img\\" aria-label=\\"remove-talk\\">🗑</span></button></td>
          </tr>
        </tbody>
      </table>"
    `);
  });
});

describe("Table", () => {
  it("is expected to render Table with Talk titles and links", () => {
    const talks = [
      {
        id: 98765,
        title: "Highest Rated Evergreen Titles to Ensure Permanent Burnout"
      },
      {
        id: 56789,
        title: "My Journey as an Analog Cupcake Nomad"
      }
    ];

    const removeTalk = () => null;

    act(() => {
      render(
        <MemoryRouter>
          <Table talks={talks} removeTalk={removeTalk} />
        </MemoryRouter>,
        containerElement
      );
    });

    expect(pretty(containerElement.innerHTML)).toMatchInlineSnapshot(`
      "<table class=\\"talk-table\\">
        <thead class=\\"talk-table-head\\">
          <tr>
            <th>Talk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class=\\"talk-table-row\\">
            <td><a href=\\"/talks/98765\\">Highest Rated Evergreen Titles to Ensure Permanent Burnout</a></td>
            <td><button><span role=\\"img\\" aria-label=\\"remove-talk\\">🗑</span></button></td>
          </tr>
          <tr class=\\"talk-table-row\\">
            <td><a href=\\"/talks/56789\\">My Journey as an Analog Cupcake Nomad</a></td>
            <td><button><span role=\\"img\\" aria-label=\\"remove-talk\\">🗑</span></button></td>
          </tr>
        </tbody>
      </table>"
    `);
  });
});
