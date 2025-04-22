import { useReducer, useEffect } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = (initialState) => {
  return JSON.parse(localStorage.getItem("todos")) || initialState
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos || []))
  }, [todos])

  const handleNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo
    }

    dispatch(action)
   }

   const handleDeleteTodo = (id) => {
      dispatch({
        type: "[TODO] Remove Todo",
        payload: id
      })
    }

    const handleToogleTodo = (id) => {
      dispatch({
        type: "[TODO] Toogle Todo",
        payload: id
      })
    }

    const todosCount = () => {
      return todos.length;
    }

    const pendingTodosCount = () => {
      return todos.reduce((accumulator, currentTodo) => {
        if (!currentTodo.done) {
          return ++accumulator
        }

        return accumulator
      },0)
    }

    return {
      todos,
      handleNewTodo,
      handleDeleteTodo,
      handleToogleTodo,
      todosCount,
      pendingTodosCount,
    }
  }