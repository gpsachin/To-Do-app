import { useState } from "react";
import Name from "./components/TodoName"
import Entry from "./components/Todoentry"
import TodoItem from "./components/TodoList"
import WelcomeMessage from "./components/welcomeMessage";
import "./App.css";

function App() {

  

  let [todoItems,setTodoItems]=useState([]);

  const handleClick=(todoName,todoDate)=>
  {
    
    const newAddedItems=[...todoItems,{Name:todoName,dueDate:todoDate}];
    setTodoItems(newAddedItems);

  }

  const handleDeleteButton=(todoItemdeleted)=>
  {
    const newAddedItems=todoItems.filter((item)=> item.Name != todoItemdeleted);
    setTodoItems(newAddedItems);

  }
  

  return <div className="align">
<div className="holder">
    <center>
<Name></Name>
<div className="items-container">
<Entry  onNewItem={handleClick}></Entry>
</div>
 {todoItems.length === 0 && <WelcomeMessage />
 }

<TodoItem todoList={todoItems}  onClickDelete={handleDeleteButton}></TodoItem>

 

  </center>
    
    </div>

  </div>
}

export default App
