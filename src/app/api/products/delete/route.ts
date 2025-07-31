//@ts-nocheck
import prismaclient from "@/service/prisma";
import { NextResponse } from "next/server";

export async function POST(req){
    const resp=await req.json();
    await prismaclient.products.delete({
        where:{
            id:resp
        }
    })
    // return NextResponse.json({
    //      msg:"success",
    //     data:prod
    // })
}