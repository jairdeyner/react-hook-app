import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Test in todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo TODO",
      done: false,
    },
  ];

  test("should return initial state", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("should add a TODO item", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "New TODO 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should delete a TODO item", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("should toggle TDOO", () => {
    const action = {
      type: "[TODO] Toogle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBeTruthy();
  });
});
