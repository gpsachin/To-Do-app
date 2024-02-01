
import Item from "./TodoItem"
const Items=({todoList,onClickDelete}) =>
{
  return(
    <div className="items-container">
{todoList.map(item=> <Item todoName={item.Name} todoDate={item.dueDate} onDeleteButton={onClickDelete}></Item>)}
  
  
</div>
  )

}
export default Items;