import { useState } from "react";
function Entry({onNewItem})
{

  let [todoName,setTodoName]=useState();
  let[todoDate,setTodoDate]=useState();

  const handleNameChange=(event) =>
  {
    setTodoName(event.target.value);
  }
  const handleDateChange=(event) =>
  {
    setTodoDate(event.target.value);
  }

  const handleAddButton = () =>
  {
    onNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }
return <div class="row myrow ">
<div class="col-6">

  <input className="alignn" type="text" placeholder="Enter list"  value={todoName}onChange={handleNameChange}/>
</div>
<div class="col-4 ">
<input  className="date" type="date" value={todoDate}onChange={handleDateChange}/>

</div>
<div class="col-2 ">
<button type="button" class="btn btn-success mybutton"  onClick={handleAddButton}>ADD</button>
</div>
</div>
}
export default Entry;