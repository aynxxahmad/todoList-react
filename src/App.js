import React,{useEffect, useState} from "react";

import "./styles/app.scss";

//Components
import Nav from "./components/Nav.js";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {

  //hooks 

  const [todos,setTodos] = useState([]);
  const [filter,setFilter] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState(todos);

  useEffect(()=>{
    //checking if i have anything in todos already or not
    if(localStorage.getItem("todos")===null)
        setTodos([]);
    else
        setTodos(JSON.parse(localStorage.getItem("todos")));
  },[]);

  return (
    <div className="App">
      <Nav setFilter={setFilter} />
      <header>
        <h1>Ayn's Todo List</h1>
      </header>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} filter={filter} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos}/>
    </div>
  );
}

export default App;
