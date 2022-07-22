import React,{useState} from "react";

const Nav =({setFilter}) => {

    return(
    <div className="navbar">
       <ul className="nav">
           <li className="options all" onClick={()=>setFilter("all")}>All</li>
           <li className="options done" onClick={()=>setFilter("done")}>Completed</li>
           <li className="options uncompleted" onClick={()=>setFilter("uncompleted")}>Uncompleted</li>
       </ul>
   </div>
    );
}



export default Nav;