//@ts-nocheck
"use client";
import prismaclient from "@/service/prisma";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Decreasebtn from "@/components/cartbtn/decreasebtn";
import Increasebtn from "@/components/cartbtn/increasebtn";
import Deletebtn from "@/components/cartbtn/deletebtn";
import { context } from "@/components/cartcontext";
 function page() {
  // const data=await prismaclient.cart.findMany();
  const{cart,setcart}=useContext(context)
  //    let sum = 0;
  // let totalPrice = 0;

  // data.forEach((element) => {
  //   sum += element.quantity;
  //   totalPrice += element.quantity * element.price;
  // });
  // const [data, setdata] = useState([]);
  const [total, setTotal] = useState(0);
const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const local =async ()=>{
      
       
  //      setdata(resp);
  //   }
  //   local();
  // }, []);
  useEffect(() => {
  let sum = 0;
  let totalPrice = 0;

  cart.forEach((element) => {
    sum += element.quantity;
    totalPrice += element.quantity * element.price;
  });

  setCount(sum);
  setTotal(totalPrice);
}, [cart]);
// async function decrease(id){
// //  const updtaedarr=data?.map((e)=>{
// // if(e.id==id){
// //     return { ...e, quantity: e.quantity - 1 };
// //   }
// //   return e;
// //  });
// //  localStorage.setItem("items",JSON.stringify(updtaedarr));
// //  setdata(updtaedarr);

// }
// async function increase(id){
// //  const updtaedarr=data?.map((e)=>{
// //   if(e.id==id){
// //     return { ...e, quantity: e.quantity + 1 };
// //   }
// //   return e;
// //  });
// // //  localStorage.setItem("items",JSON.stringify(updtaedarr));
// // //  setdata(updtaedarr);
// // }
// // function handeldelete(id){
// //  const updtaedarr=data.filter((e)=>{if(e.id!=id)return true});
// //  localStorage.setItem("items",JSON.stringify(updtaedarr));
// //  setdata(updtaedarr);
// await prismaclient.cart.update({
//   where:{
//     id:id },
//     data:{
//       quantity:quantity+1
//     }
  
// })
// }
  return (
   <div className="bg-gray-300 min-h-screen flex gap-3 p-3">
  <div className="w-[80%] bg-white flex flex-col p-8">
    <h1 className="font-bold text-xl mb-3">Shopping Cart</h1>
    <hr className="mb-4" />

    <div className="flex flex-col gap-4">
      {cart.length === 0 ? (
        <div className="text-gray-600">Your cart is empty.</div>
      ) : (
        cart.map((val, ind) => (
          <div className="flex flex-col gap-3" key={ind}>
            <div className="flex gap-4">
              <img src={val.img_url} alt={val.title} className="w-[300px] h-[300px] object-cover rounded" />
              <div className="flex flex-col justify-center gap-2">
                <h2 className="font-bold text-2xl">{val.title}</h2>
                <p className="text-sm text-gray-800">{val.description}</p>
                <p className="text-amber-400 font-medium">₹{val.price}</p>
                <div className="flex gap-2 h-10 w-28 rounded-md border-2 border-amber-600 items-center justify-between px-2 bg-white shadow-sm">
                  {val.quantity > 1 ? (
                    <Decreasebtn id={val.id} quantity={val.quantity} />
                  ) : (
                    <Deletebtn id={val.id} />
                  )}
                  <p className="text-base font-medium text-gray-800">{val.quantity}</p>
                  <Increasebtn id={val.id} quantity={val.quantity} />
                </div>
              </div>
            </div>
            <hr className="opacity-10" />
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="text-xl text-right mt-4">
          {`Subtotal (${count} items): ₹`}
          <span className="font-bold text-xl">{total}</span>
        </div>
      )}
    </div>
  </div>

  <div className="w-[20%] flex flex-col gap-4">
    
    <div className="w-full h-[300px] bg-white flex flex-col justify-center items-center gap-3 p-4 shadow">
      <p className="w-full text-2xl">
        {`Subtotal (${count} items): ₹`}
        <span className="font-bold">{total}</span>
      </p>
      <div className="w-full flex items-center gap-2">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="text-sm">This order contains a gift</label>
      </div>
      <button className="w-full h-10 rounded-xl bg-amber-300 hover:bg-amber-400 transition">
        Proceed to Buy
      </button>
    </div>
    <div className="w-full min-h-screen bg-white p-4 shadow">
    </div>
  </div>
</div>

  );
}

export default page;
