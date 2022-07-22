import React,{useEffect} from "react";


const Todo = ({todo,todos,setTodos}) => {

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);

    const completedHandler = () => {
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            else 
                return item;
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id != todo.id ));
    }

    return(
        <div className={`todo_div ${todo.completed? "completed":""} `}>
            <li className="todo_li">{todo.todoInput}</li>
            <button className="check_button" onClick={completedHandler}><i className="fas fa-check"></i></button>
            <button className="trash_button" onClick={deleteHandler} ><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;
