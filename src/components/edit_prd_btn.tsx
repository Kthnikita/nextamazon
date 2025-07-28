//@ts-nocheck
'use client'
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { editprd } from '@/service/productaction'
function Editbtn({item}) {
        const [title,setitle]=useState(item.title)
        const [des,setdes]=useState(item.description)
        const [price,setprice]=useState(item.price);
        const [img,setimg]=useState(item.img_url);
        function handeledit(){
            const parseprice=Number.parseFloat(price);
            const obj={
                title,
                description:des,
                price:parseprice,
                img_url :img
            }
        const resp=editprd(obj,item.id);
        }
  return (
  
      <div>
        <Dialog.Root>
	<Dialog.Trigger>
		<Button>Edit</Button>
	</Dialog.Trigger>

	<Dialog.Content maxWidth="450px">
		<Dialog.Title>Edit Product</Dialog.Title>
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
				<Button onClick={handeledit}>Save</Button>
			</Dialog.Close>
		</Flex>
	</Dialog.Content>
</Dialog.Root>
    </div>
  )
}

export default Editbtn
