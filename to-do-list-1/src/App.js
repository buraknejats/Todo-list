import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos"; 

function App() {
 const [todos, setTodos] = useState([]);
   
 useEffect(() => {
const storageTados = JSON.parse ( localStorage.getItem(LOCAL_STORAGE_KEY)); 
if (storageTados) {
  setTodos(storageTados);
}
 }, [] );

 useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify( todos));

 }, [todos] );

function addTodo(todo){
setTodos([todo, ...todos]);
 
function toggleComplete(id) {
setTodos(
todos.map(todo => {
  if(todo.id === id ) {
return {
...todo,
completed: !todo.completed
};

  }
  return todo;
})
);

}

function removeTodo (id) {
setTodos(todos.filter(todo => todo.id !== id ));
}
 
  return (
    <div className="App">
      <header className="App-header">
       <p>React Todo</p>
       <TodoForm addTodo={addTodo} />
       <TodoList todos={todos}  toggleComplete={toggleComplete}
       removeTodo={removeTodo}
       />
      </header>
    </div>
  );
} 
}

export default App; 