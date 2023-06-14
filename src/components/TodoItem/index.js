import './index.css'

const TodoItem = props => {
  const {todoDetails, key, deleteTodo} = props
  const {title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(key)
  }
  return (
    <div className="todo-container">
      <p className="title-text">{title}</p>
      <button className="btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
