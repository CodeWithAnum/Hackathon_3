import React from 'react'
import Link from 'next/link';
import { IoCart } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
        {/*Main Navigation*/}
        <div className='max-w-7xl hidden sm:block mx-auto flex justify-between items-center p-4'>
            <h1 className='text-2xl font-bold hidden sm:block '>SHOP.CO</h1>
            <nav className='hidden md:flex space-x-6'>
                
                <div className='relative group md:ml-[250px] ml-[-1104px] mt-[-22px]'>
                    {/*Dropdown Trigger */}
                    <button>Shop</button>
                    {/*DropDown Menu */}
                    <div className='absolute hidden group-hover:block rounded shadow-md mt-2 z-10'>
                        <Link href={"/TShirts"} className='block px-4 py-2'>T-Shirts</Link>
                        <Link href={"/Shorts"} className='block px-4 py-2'>Shorts</Link>
                        <Link href={"/Shirt"} className='block px-4 py-2'>Shirts</Link>
                    </div>
                </div>
                <Link href={"/dashboard"} className='mt-[-23px]'>Home</Link>
                <Link href="#TopSell" className='mt-[-22px]'>On Sale</Link>
                <Link href="#NewArrivals" className='mt-[-21px]'>New Arrivals</Link>
                <Link href="#Brands" className='mt-[-20px]'>Brands</Link>

                <div>
                    <button className='w-[577px] rounded border-[#F0F0F0]'>
                   <div className='lg:ml-[164px] flex md:ml-[144px] md:mt-[-26px]'>
                    
                    </div>
                        <input type="text" placeholder='Search for products...' />
                    </button>
                </div>
            
            <div className='flex space-x-4 mt-[-16px]'>
                <Link href={"/cart"}>
                <IoCart />
               </Link>  
                       
            </div>
            </nav>

           
        </div>


    </header>
     

  )
}

export default Navbar
