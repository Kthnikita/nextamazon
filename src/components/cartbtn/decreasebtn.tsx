//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import { decrease } from '@/service/productaction'
import { context } from '../cartcontext'
function Decreasebtn({id,quantity}) {
  const{cart,setcart}=useContext(context);
  async function handeldec(){
    const item=cart.find((e)=>e.id==id);
    if(item){
          const dec=cart.map((val)=>{
                  if(val.id==item.id){
                    return{
                      ...val,
                      quantity:quantity-1
                    }
                  }
                  return val;
          })
          setcart(dec);
        }
    const resp=await decrease(id,quantity)
  }
  return (
    <div>
      <button className="text-amber-600 hover:text-white hover:bg-amber-600 p-1 rounded transition duration-200 text-lg font-bold" onClick={handeldec}>-</button>
    </div>
  )
}

export default Decreasebtn
