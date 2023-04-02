export default function CompletedList(props) {
  return(
    <div className="compl_ul">
      <ul>
        {props.todos.map((TodoNote, id) => (
          <li 
            key={id}
            style={{textDecoration: TodoNote.completed ? "line-through" : "none"}} 
            onClick={() => props.completedNote(id)}>
            {TodoNote.text}
          </li>
        ))}
      </ul>
    </div>
  )
}