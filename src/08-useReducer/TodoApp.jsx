import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {
  const { todos,
          handleDeleteTodo,
          handleNewTodo,
          handleToogleTodo,
          pendingTodosCount,
          todosCount } = useTodos()

  return (
    <>
      <h1>TodoApp: {todosCount()}, <small>pendientes: {pendingTodosCount()}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToogleTodo={handleToogleTodo} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}