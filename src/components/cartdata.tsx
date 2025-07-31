//@ts-nocheck
'use client'
import React from 'react'
import Decreasebtn from "@/components/cartbtn/decreasebtn";
import Increasebtn from "@/components/cartbtn/increasebtn";
import Deletebtn from "@/components/cartbtn/deletebtn";
function Cartdata() {
  return (
    <div className="bg-gray-300 min-h-screen flex gap-3 p-3">
      <div className="w-[80%] min-h-screen bg-white flex flex-col p-8">
        <h1 className="font-bold text-xl mb-3">Shopping Cart</h1>
        <hr />
        <div className="flex flex-col">
          {data.length == 0 ? (
            <div>cart is empty</div>
          ) : (
            data?.map((val, ind) => {
              return (
                <div className="flex flex-col" key={ind}>
                  <div className="flex">
                    <img src={val.img_url} alt="" />
                    <div className="flex flex-col justify-center gap-2">
                      <h1 className="font-bold text-2xl">{val.title}</h1>
                      <p className="text-sm text-gray-800">{val.description}</p>
                      <p className="text-amber-400">₹{val.price}</p>
                      <div className="flex gap-2 h-10 w-28 rounded-md border-2 border-amber-600 items-center justify-between px-2 bg-white shadow-sm">
                       {val.quantity>1? <Decreasebtn id={val.id} quantity={val.quantity}/>: <Deletebtn id={val.id}/>}
                        <p className="text-base font-medium text-gray-800">
                          {val.quantity}
                        </p>
                        <Increasebtn id={val.id} quantity={val.quantity}/>
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-5" />
                </div>
              );
            })
          )}
          <hr />
          <div className="text-xl text-right mt-3">{`Subtotal(${sum}items):₹`} <span className="font-bold text-xl">{totalPrice}</span></div>
        </div>
      </div>
      <div className="w-[20%] min-h-screen flex flex-col gap-4">
        <div className="w-[100%] h-[300px] bg-white flex flex-col justify-center items-center gap-3">
          <p className="w-[90%] text-2xl">{`Subtotal (${sum} items):₹`}<span className="font-bold text-2xl">{totalPrice}</span></p>
          <div className="w-[90%]">
            <input type="checkbox" id="check"/>
           <label htmlFor="check">This order contains a gift</label>
          </div>
           <button className="w-[90%] h-10 rounded-xl bg-amber-300">Proceed to Buy</button>
        </div>
        <div className="w-[100%] min-h-screen bg-white"></div>
      </div>
    </div>
  )
}

export default Cartdata
