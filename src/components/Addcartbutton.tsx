//@ts-nocheck
'use client'

// import { useState } from "react";
import { context } from "./cartcontext";
import { json } from "stream/consumers";
import { cartdb } from "@/service/productaction";
import { useContext, useState } from "react";
import { POSSIBLE_ROLES } from "firebase/ai";
function Addcartbutton({item}) {
   const[present,setpresent]=useState(false);
  const{cart,setcart}=useContext(context);
    async function handeldata(){
        const existitem=cart.find((e)=>{
          if(e.id==item.id)return true;
        })
        if(existitem){
         const arr=cart.map((val)=>{
          if(val.id==existitem.id){
            return {
              ...val,
              quantity:existitem.quantity
            }
          }
          return val
        })
          setcart(arr);
        }
       else{
         const itemadd={
          ...item,
          quantity:1
        }
        setpresent(true);
          cart.push(itemadd);
       }
      //  const request=await fetch("http://localhost:3000/api/products",{
      //   method:"POST",
      //   body:JSON.stringify(item)
      //  })

         const resp=await cartdb(item);
    }
  return (
    <div>
      {present?<button>Added</button>:<button onClick={handeldata}>Add to cart</button>}
    </div>
  )
}

export default Addcartbutton
