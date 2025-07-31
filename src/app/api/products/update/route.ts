//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
const body= await req.json();
const updobj={
  title :body.title,    
  description :body.description,
  price:body.price,
  img_url:body.img_url
}
console.log(body);
const upd=await prismaclient.products.update({
    where:{
        id:body.id,
    },
    data:updobj
})
return NextResponse.json({
    msg:"success",
    data:upd
})
}