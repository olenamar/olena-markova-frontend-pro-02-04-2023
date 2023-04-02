import { React, useState } from "react";
import AddNode from "./AddNode";
import CompletedList  from "./CompletedList"

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [TodoNote, setTodoNote] = useState("");

  const addNoteTodo = () => {
    if (TodoNote !== "") {
      setTodos([...todos, {text: TodoNote, completed: false}]);
      setTodoNote("");
    }
  };

  const completedNote = (id) => {
    const completedTodos = [...todos];
    completedTodos[id].completed = !completedTodos[id].completed;
    setTodos(completedTodos);
  };

  return(
    <div className="container">
      <h1>My to-do list</h1>
      <CompletedList todos={todos} completedNote={completedNote}></CompletedList>
      <AddNode TodoNote={TodoNote} addNoteTodo ={addNoteTodo} setTodoNote={setTodoNote}></AddNode>
    </div>
  );
}