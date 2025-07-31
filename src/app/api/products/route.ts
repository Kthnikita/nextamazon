//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextResponse } from "next/server";

export async function GET(req){
    const resp=await prismaclient.products.findMany();
    return NextResponse.json({
        msg:true,
        data:resp
    })
}

export async function POST(req){
    const resp=await req.json();
    const prod=await prismaclient.products.create({
        data:resp
    })
    return NextResponse.json({
         msg:"success",
        data:prod
    })
}