import { React, useState } from "react";
import AddNode from "./AddNode";
import CompletedList  from "./CompletedList";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoNote, setTodoNote] = useState("");

  const addNoteTodo = () => {
    if(todoNote !== ""){
      setTodos([...todos, {text: todoNote, completed: false}]);
      setTodoNote("");
    }
  };

  const completedNote = (index) => {
    const completedTodos = [...todos];
    completedTodos[index].completed = !completedTodos[index].completed;
    setTodos(completedTodos);
  };

  return(
    <div className="container">
      <h1>My to-do list</h1>
      <CompletedList todos={todos} completedNote={completedNote}></CompletedList>
      <AddNode todoNote={todoNote} addNoteTodo={addNoteTodo} setTodoNote={setTodoNote}></AddNode>
    </div>
  );
}