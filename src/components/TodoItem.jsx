function Item({todoName,todoDate,onDeleteButton})
{

  
return <div class="row myrow">
<div  class="col-6">

{todoName}
</div>
<div  class="col-4 ">
{todoDate}

</div>
<div class="col-2 ">
<button type="button" class="btn btn-danger" onClick={()=>onDeleteButton(todoName)}>DELETE</button>
</div>
</div>
}
export default Item;