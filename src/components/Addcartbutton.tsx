//@ts-nocheck
'use client'

import { useState } from "react";
import { json } from "stream/consumers";

function Addcartbutton({item}) {
  // const[present,setpresent]=useState(false);
    function handeldata(){
         let data = localStorage.getItem('items');
        data = data ? JSON.parse(data) : [];
        const existitem=data.find((e)=>{
          if(e.id==item.id)return true;
        })
        if(existitem){
          existitem.quantity=existitem.quantity+1;
        }
       else{
         const itemadd={
          ...item,
          quantity:1
        }
          data.push(itemadd);
       }
       
         
        localStorage.setItem('items', JSON.stringify(data));
    }
  return (
    <div>
      <button onClick={handeldata}>Add to cart</button>
    </div>
  )
}

export default Addcartbutton
