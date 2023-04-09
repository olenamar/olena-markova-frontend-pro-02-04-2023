export default function CompletedList(props) {
  return(
    <div className="compl_ul">
      <ul>
        {props.todos.map((todoNote, index) => (
          <li 
            key={index}
            style={{textDecoration: todoNote.completed ? "line-through" : "none"}} 
            onClick={() => props.completedNote(index)}>
            {todoNote.text}
          </li>
        ))}
      </ul>
    </div>
  )
}