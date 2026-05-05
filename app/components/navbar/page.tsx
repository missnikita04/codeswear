   import React from 'react'
   import Image from 'next/image'
   import Link from 'next/link'
   import { FaShoppingCart } from "react-icons/fa";
   
   const Navbar=()=> {
     return (
       <div>
        <div className="flex md:flex-row md:justify-start  justify-between items-center flex-col py-2">
            <div className="logo mx-5 ">
               <Image src="/images/logo.jpeg"  alt="logo img" width={80} height={30}  />
            </div>
            <div className="nav">
                <ul  className='flex item-center space-x-2 font-bold  md:text-xl'>
                    <Link href={"/"}><li>tshirts</li></Link>
                    <Link href={"/"}><li>hoodies</li></Link>
                    <Link href={"/"}><li>mugs</li></Link>
                    <Link href={"/"}><li>stickers</li></Link>
                 
                </ul>
            </div>
            <div className='cart absolute right-0 mx-12 top-6'>
                <FaShoppingCart className='text-xl md:text-3xl text-pink-500 ' />
            </div>
        </div>
       </div>
     )
   }
   
   export default Navbar
   