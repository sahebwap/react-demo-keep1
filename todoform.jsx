import React,{useState} from "react";

function Todoform(props){
  const [input,setInput] = useState('');
  const handleChange = e =>{
    setInput(e.target.value);
  };
  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*1000),
      text:input
    });

    setInput('');
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholde="Add a todo"
        value={input} name="text"
        className="todo-input"
        onChange={handleChange}/>
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}
export default Todoform;
