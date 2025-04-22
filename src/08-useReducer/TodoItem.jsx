export const TodoItem = ({todo, onDeleteTodo, onToogleTodo}) => {
  const {id, description, done} = todo

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        role="button"
        className={`align-self-center ${done ? "text-decoration-line-through" : ""}`}
        onClick={() => onToogleTodo(id)}
      >
        {description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(id)}
      >
        Borrar
      </button>
    </li>
  )
}