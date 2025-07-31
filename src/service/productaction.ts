//@ts-nocheck
'use server'
import { cookies } from "next/headers";
import { generateToken } from "./jwt";
import prismaclient from "./prisma"
import { redirect } from "next/dist/server/api-utils";
export async function addproduct(product){
    await prismaclient.products.create({
        data:product
    })
}

export async function editprd(prddata,id) {
    try {
    await prismaclient.products.update({
      where: {
        id: id,
      },
      data: prddata,
    });
  } catch (err) {
    console.log(err)
  }
}

export async function deleteprd(id){
    try{
   const del=await prismaclient.products.delete({
    where:{
        id:id
    }
   })
   console.log(del);
    }
    catch (err) {
    alert("oops:/");
  }
}

export async function cartdb(obj){
  try{
    await prismaclient.cart.create({
      data:{...obj,quantity:1}
    })
  }
  catch(e){
    console.log(e)
  }
}

export async function getcartdb(){
  try{
    const data=await prismaclient.cart.findMany()
    if(data){
      return data;
    }
  }
  catch(e){
    console.log(e);
  }
}

export async function decrease(id,quantity) {
  await prismaclient.cart.update({
  where:{
    id:id },
    data:{
      quantity:quantity-1
    }
  
})
}
export async function increase(id,quantity) {
  await prismaclient.cart.update({
  where:{
    id:id },
    data:{
      quantity:quantity+1
    }
  
})
}

export async function deletecartitem(id){
  try{
   await prismaclient.cart.delete({
    where:{
        id:id
    }
   })
    }
    catch (err) {
    alert("oops:/");
  }
}

export async function signup(userdata) {
  try{
    const newuser=await prismaclient.user.create({
      data:userdata,
    })
    const token= await generateToken({
      id:newuser.id,
      name:newuser.name
    })
    const cookie= await cookies();
    cookie.set("token",token);
    return(
      {success:true,
        msg:"successfully register!"
      }
    )
  }
  catch(e){
    console.log(e);
    return(
      {
        success:false,
        msg:"user already exists"
      }
    )
  }
}

export async function signin(userdata){
  try{
    const valid=await prismaclient.user.findUnique({
      where:{
        email:userdata.email
      }
    })
    if(!valid || valid.password!=userdata.pass){
       return(
      {success:false,
        msg:"invalid email and password"
      }
    )
    }
     const token= await generateToken({
      id:valid.id,
      name:valid.name
    })
    const cookie= await cookies();
    cookie.set("token",token);
   return(
      {success:true,
        msg:"successfully loggedin!"
      }
    )
  }
  catch(e){
    console.log(e);
    return(
      {success:false,
        msg:"invalid email and password"
      }
    )
  }
}

export async function logout(){
  const cookie=cookies();
   cookie.delete('token')
}