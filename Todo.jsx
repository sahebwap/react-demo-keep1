import React from "react";
import Todoform from './todoform';
import Todolist from './todolist';

function Todo(){
  return (
    <div style={{alignItems:"center",textAlign:"center"}}>
    <h1 style={{color:"#5d0cff",fontWeight:"900"}}>Demo Todo App</h1>
    <Todolist/>
    </div>
  );
}

export default Todo;
