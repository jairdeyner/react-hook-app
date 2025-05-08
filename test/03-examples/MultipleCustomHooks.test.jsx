import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Tets for <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render the default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando")).toBeTruthy();
  });

  test("should render the pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Pikachu",
        sprites: {
          front_default: "https://pikachutest1.com",
          front_shiny: "https://pikachutest2.com",
          back_default: "https://pikachutest3.com",
          back_shiny: "https://pikachutest4.com",
        },
      },
      isLoading: false,
      hasError: false,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText(/pikachu/i));
  });

  test("should call the increment() function", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Pikachu",
        sprites: {
          front_default: "https://pikachutest1.com",
          front_shiny: "https://pikachutest2.com",
          back_default: "https://pikachutest3.com",
          back_shiny: "https://pikachutest4.com",
        },
      },
      isLoading: false,
      hasError: false,
    });

    render(<MultipleCustomHooks />);
    const $nextButton = screen.getByRole("button", { name: "Siguiente" });

    fireEvent.click($nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
