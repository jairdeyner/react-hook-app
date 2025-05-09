import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("Test for MainApp", () => {
  test("should render HomePage component", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should render LoginPage component", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
