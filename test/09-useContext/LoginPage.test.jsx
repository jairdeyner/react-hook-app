import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Test for LoginPage", () => {
  test("should render the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const $preElement = screen.getByLabelText("pre");

    expect($preElement.innerHTML).toBe("null");
  });

  test("should call setUser() when clicking the button", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const $buttonElement = screen.getByRole("button");

    fireEvent.click($buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Jair",
      email: "jair@gmail.com",
    });
  });
});
