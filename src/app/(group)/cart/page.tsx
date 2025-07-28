//@ts-nocheck
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function page() {
  const [data, setdata] = useState([]);
  const [total, setTotal] = useState(0);
const [count, setCount] = useState(0);
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("items")) || [];
    setdata(local);
  }, []);
  useEffect(() => {
  let sum = 0;
  let totalPrice = 0;

  data.forEach((element) => {
    sum += element.quantity;
    totalPrice += element.quantity * element.price;
  });

  setCount(sum);
  setTotal(totalPrice);
}, [data]);
function decrease(id){
 const updtaedarr=data?.map((e)=>{
if(e.id==id){
    return { ...e, quantity: e.quantity - 1 };
  }
  return e;
 });
 localStorage.setItem("items",JSON.stringify(updtaedarr));
 setdata(updtaedarr);
}
function increase(id){
 const updtaedarr=data?.map((e)=>{
  if(e.id==id){
    return { ...e, quantity: e.quantity + 1 };
  }
  return e;
 });
 localStorage.setItem("items",JSON.stringify(updtaedarr));
 setdata(updtaedarr);
}
function handeldelete(id){
 const updtaedarr=data.filter((e)=>{if(e.id!=id)return true});
 localStorage.setItem("items",JSON.stringify(updtaedarr));
 setdata(updtaedarr);
}
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
                    <img src={val.thumbnail} alt="" />
                    <div className="flex flex-col justify-center gap-2">
                      <h1 className="font-bold text-2xl">{val.title}</h1>
                      <p className="text-sm text-gray-800">{val.description}</p>
                      <p className="text-amber-400">₹{val.price}</p>
                      <div className="flex gap-2 h-10 w-28 rounded-md border-2 border-amber-600 items-center justify-between px-2 bg-white shadow-sm">
                       {val.quantity>1? <button className="text-amber-600 hover:text-white hover:bg-amber-600 p-1 rounded transition duration-200 text-lg font-bold" onClick={()=>{decrease(val.id)}}>
                          -
                        </button>: <button className="text-white p-1 rounded  text-sm" onClick={()=>{handeldelete(val.id)}}>
                          🗑️
                        </button>}
                        <p className="text-base font-medium text-gray-800">
                          {val.quantity}
                        </p>
                        <button className="text-amber-600 hover:text-white hover:bg-amber-600 p-1 rounded transition duration-200 text-lg font-bold" onClick={()=>{increase(val.id)}}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="opacity-5" />
                </div>
              );
            })
          )}
          <hr />
          <div className="text-xl text-right mt-3">{`Subtotal(${count}items):₹`} <span className="font-bold text-xl">{total}</span></div>
        </div>
      </div>
      <div className="w-[20%] min-h-screen flex flex-col gap-4">
        <div className="w-[100%] h-[300px] bg-white flex flex-col justify-center items-center gap-3">
          <p className="w-[90%] text-2xl">{`Subtotal (${count} items):₹`}<span className="font-bold text-2xl">{total}</span></p>
          <div className="w-[90%]">
            <input type="checkbox" id="check"/>
           <label htmlFor="check">This order contains a gift</label>
          </div>
           <button className="w-[90%] h-10 rounded-xl bg-amber-300">Proceed to Buy</button>
        </div>
        <div className="w-[100%] min-h-screen bg-white"></div>
      </div>
    </div>
  );
}

export default page;
