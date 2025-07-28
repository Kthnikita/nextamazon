//@ts-nocheck
'use server'
import prismaclient from "./prisma"
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
    alert( "updated");
  } catch (err) {
    alert("oops:/");
  }
}

export async function deleteprd(id){
    try{
   await prismaclient.products.delete({
    where:{
        id:id
    }
   })
    }
    catch (err) {
    alert("oops:/");
  }
}