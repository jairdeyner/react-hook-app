import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Test for HomePage", () => {
  const user = {
    id: 1,
    name: "Fernando",
  };

  test("should render the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const $preTag = screen.getByLabelText("pre");

    expect($preTag.innerHTML).toBe("null");
  });

  test("should render the component with user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const $preTag = screen.getByLabelText("pre");

    expect($preTag.innerHTML).toContain(user.name);
    expect($preTag.innerHTML).toContain(user.id.toString());
  });
});
