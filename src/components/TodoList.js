import React,{useEffect} from "react";

//importing components
import Todo from "./Todo";


const TodoList = ({todos,setTodos,filter,filteredTodos,setFilteredTodos}) => {

       useEffect(()=>{
        if(filter==="all"){
            setFilteredTodos(todos);
        }
        else if(filter==="done"){
            setFilteredTodos(todos.filter(item=>{
                return item.completed===true; //boolean value;
            }))
        }
        else {
            setFilteredTodos(todos.filter(item=>{
                return item.completed===false;
            }))
        }
       },[filter,todos]);
    
    

    return(
        <div className="todo_container">
            <ul className="todo_list">
                {filteredTodos.map(todo=>
                    <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                )}
            </ul>
        </div>
    );
}

export default TodoList;
