//@ts-nocheck
'use client'
import { deleteprd } from "@/service/productaction"
function Delete({itemid}) {
    function handeldelete(){
     const resp=deleteprd(itemid);
    }
  return (
    <div>
      <button onClick={handeldelete}>Delete</button>
    </div>
  )
}

export default Delete
