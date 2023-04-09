export default function TodoList(props) {
  return(
    <div className="input_node">
      <input 
        type="text" 
        value={props.todoNote} 
        placeholder="Added a node" 
        onChange={(e) => props.setTodoNote(e.target.value)}>
      </input>
      <button className="btn-button" onClick={props.addNoteTodo}>Save</button>
    </div>
  )
}