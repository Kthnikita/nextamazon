//@ts-nocheck
"use client";
import { deletecartitem } from "@/service/productaction";
import { useContext } from "react";
import { context } from "../cartcontext";
function Deletebtn({id}) {
    const {cart,setcart}=useContext(context);
    async function handeldel(){
      const item=cart.filter((e)=>e.id!=id);
      setcart(item);
          const resp=await deletecartitem(id)
    }
  return (
    <div>
      <button className="text-white p-1 rounded  text-sm" onClick={handeldel}>🗑️</button>
    </div>
  );
}

export default Deletebtn;
