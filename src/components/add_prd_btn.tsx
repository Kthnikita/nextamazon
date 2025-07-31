//@ts-nocheck
'use client'
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { addproduct } from '@/service/productaction'
function Addbtn() {
    const [title,setitle]=useState("")
	const [des,setdes]=useState("")
	const [price,setprice]=useState();
	const [img,setimg]=useState("");
    async function handelsubmit(){
        const parseprice=Number.parseFloat(price);
        const obj={
            title,
            description:des,
            price:parseprice,
            img_url :img
        }
    // const resp=addproduct(obj);
	const request=await fetch("http://localhost:3000/api/products",{
        method:"POST",
        body:JSON.stringify(obj)
       })
    }
  return (
    <div>
        <Dialog.Root>
	<Dialog.Trigger>
		<Button>Add</Button>
	</Dialog.Trigger>

	<Dialog.Content maxWidth="450px">
		<Dialog.Title>Add Product</Dialog.Title>
		{/* <Dialog.Description size="2" mb="4">
			Make changes to your profile.
		</Dialog.Description> */}

		<Flex direction="column" gap="3">
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Title
				</Text>
				<TextField.Root
					value={title}
					placeholder="Enter Title"
					onChange={(e)=>setitle(e.target.value)}
				/>
			</label>
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Description
				</Text>
				<TextField.Root
					value={des}
					placeholder="Enter Description"
					onChange={(e)=>setdes(e.target.value)}
				/>
			</label>
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					price
				</Text>
				<TextField.Root
					value={price}
					placeholder="Enter price"
					onChange={(e)=>setprice(e.target.value)}
				/>
			</label>
			<label>
				<Text as="div" size="2" mb="1" weight="bold">
					Image_url
				</Text>
				<TextField.Root
					value={img}
					placeholder="Enter img_url"
					onChange={(e)=>setimg(e.target.value)}
				/>
			</label>
		</Flex>

		<Flex gap="3" mt="4" justify="end">
			<Dialog.Close>
				<Button variant="soft" color="gray">
					Cancel
				</Button>
			</Dialog.Close>
			<Dialog.Close>
				<Button onClick={handelsubmit}>Save</Button>
			</Dialog.Close>
		</Flex>
	</Dialog.Content>
</Dialog.Root>
    </div>
  )
}

export default Addbtn
