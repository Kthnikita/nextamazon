//@ts-nocheck
'use client'
import { deleteprd } from "@/service/productaction"
function Delete({itemid,deleteprod}) {
   async function handeldelete(){
    deleteprod(itemid)
    //  const resp= await deleteprd(itemid);
    const request=await fetch("http://localhost:3000/api/products/delete",{
        method:"POST",
        body:JSON.stringify(itemid)
       })
    }
  return (
    <div>
      <button onClick={handeldelete}>Delete</button>
    </div>
  )
}

export default Delete
