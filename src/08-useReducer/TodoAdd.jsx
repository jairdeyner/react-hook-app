import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {
  const {todoDescription, onInputChange, onResetForm} = useForm({todoDescription: ""})

  const handleSubmit = (event) => {
    event.preventDefault()

    if(todoDescription.trim().length <= 1) return

    const todo = {
      id: new Date().getTime() * 3,
      description: todoDescription,
      done: false
    }

    onNewTodo(todo)
    onResetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todoDescription"
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        value={todoDescription}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}