import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Test in TodoItem", () => {
  const todo = {
    id: 1,
    description: "Demo TODO",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should render todo item with pending status", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToogleTodo={onToggleTodoMock}
      />
    );

    const $liElement = screen.getByRole("listitem");
    expect($liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const $spanElement = screen.getByLabelText("span");
    expect($spanElement.className).toContain("align-self-center");
    expect($spanElement.className).not.toContain(
      "text-decoration-line-through"
    );
  });

  test("should render todo item with completed status", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToogleTodo={onToggleTodoMock}
      />
    );

    const $spanElement = screen.getByLabelText("span");

    expect($spanElement.className).toContain("text-decoration-line-through");
  });

  test("should call onToogleTodo() when clicking the span element", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToogleTodo={onToggleTodoMock}
      />
    );
    const $spanElement = screen.getByLabelText("span");

    fireEvent.click($spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should call onDeleteTodo() when clicking the button element", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToogleTodo={onToggleTodoMock}
      />
    );
    const $buttonElement = screen.getByText("Borrar");

    fireEvent.click($buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
