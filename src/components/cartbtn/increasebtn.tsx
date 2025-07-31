//@ts-nocheck
'use client'
import React, { useContext } from 'react'
import { increase } from '@/service/productaction'
import { context } from '../cartcontext';
function Increasebtn({id,quantity}) {
  const {cart,setcart}=useContext(context);
  async function handelinc(){
    const item=cart.find((e)=>e.id==id);
        if(item){
          const inc=cart.map((val)=>{
                  if(val.id==item.id){
                    return{
                      ...val,
                      quantity:quantity+1
                    }
                  }
                  return val;
          })
          setcart(inc);
        }
        const resp=increase(id,quantity)
  }
  return (
    <div>
      <div>
            <button className="text-amber-600 hover:text-white hover:bg-amber-600 p-1 rounded transition duration-200 text-lg font-bold" onClick={handelinc}>+</button>
          </div>
    </div>
  )
}

export default Increasebtn
