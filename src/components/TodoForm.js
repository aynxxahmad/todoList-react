import React,{useState} from "react";
import {v4 as uuidv4} from "uuid";



const TodoForm = ({todos,setTodos}) => {

    //hooks
    const [inputText,setInputText] = useState("");
    const [inputTextIsValid,setInputTextIsValid] = useState(true);
    //functions

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(inputText.trim()===""){
            setInputTextIsValid(false);
            return;
        }
        setInputTextIsValid(true);
        setTodos([...todos,{
            todoInput:inputText,
            completed:false,
            id:uuidv4()
        }])
        setInputText("");
    }

    return(
            <form onSubmit={formSubmitHandler}>
                <input value={inputText} type="text" onChange={inputTextHandler} className={`todo_input ${inputTextIsValid?"":"input-invalid"}`} placeholder="What do you wanna do?  "/>
                <button className="todo_button"><i className="fas fa-plus"></i></button>
            </form>
    );
}


export default TodoForm;