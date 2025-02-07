import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-[48px] bg-[#F0F0F0]'>

      <div className='hidden sm:block wrapper'>
      <Image src={"/images/Frame 45.svg"} alt="hero-image" width={1240} height={180}/>
      </div>

      <div className='lg:hidden wrapper px-6'>
      <Image src={"/images/Frame 109.svg"} alt="hero-image" width={358} height={293}/>
      </div>

        <footer className="wrapper text-black body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
        
        <span className="ml-3 text-4xl font-bold">SHOP.CO</span>
      </a>
      <p className="mt-2 text-sm text-gray-700">
      We have clothes that suits your style and which you are proud to wear. From women to men.
      </p>
      <div className='flex gap-[12px] ml-[46px] mt-[28px]'>
      <Image src={"/images/1.svg"} alt="hero-image" width={28} height={28}/>
      <Image src={"/images/2.svg"} alt="hero-image" width={28} height={28}/>
      <Image src={"/images/3.svg"} alt="hero-image" width={28} height={28}/>
      <Image src={"/images/4.svg"} alt="hero-image" width={28} height={28}/>
      </div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4">
        <h2 className="title-font font-medium text-black tracking-[3px] text-sm mb-3">
          COMPANY
        </h2>
        <nav className="list-none mb-10 space-y-2">
          <li>
            <a className="text-gray-700 hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Features</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Works</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Career</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4 mt-14 lg:mt-0">
        <h2 className="title-font font-medium text-black tracking-[3px] text-sm mb-3">
          HELP
        </h2>
        <nav className="list-none mb-10 space-y-2">
          <li>
            <a className="text-gray-700 hover:text-gray-800">Customer Support</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Delivery Details</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Terms & Conditions</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4 mt-14 lg:mt-0">
        <h2 className="title-font font-medium text-black tracking-[3px] text-sm mb-3">
          FAQ
        </h2>
        <nav className="list-none mb-10 space-y-2">
          <li>
            <a className="text-gray-700 hover:text-gray-800">Account</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Manage Deliveries</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Orders</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Payments</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-y-4 mt-14 lg:mt-0">
        <h2 className="title-font font-medium text-black tracking-[3px] text-sm mb-3">
          RESOURCES
        </h2>
        <nav className="list-none mb-10 space-y-2">
          <li>
            <a className="text-gray-700 hover:text-gray-800">Free eBooks</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Development Tutorial</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">How to - Blog</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-gray-800">Youtube Playlist</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="border-t">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-700 text-sm text-center sm:text-left">
        Shop.co © 2000-2023. All Rights Reserved
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-black">
        <Image src={"/images/Badge.svg"} alt="hero-image" width={46.61} height={30.03}/>
        </a>
        <a className="ml-3 text-black">
        <Image src={"/images/Badge (1).svg"} alt="hero-image" width={46.61} height={30.3}/>
        </a>
        <a className="ml-3 text-black">
        <Image src={"/images/Badge (2).svg"} alt="hero-image" width={46.61} height={30.3}/>
        </a>
        <a className="ml-3 text-black">
        <Image src={"/images/Badge (3).svg"} alt="hero-image" width={46.61} height={30.3}/>
        </a>
        <a className="ml-3 text-black">
        <Image src={"/images/Badge (4).svg"} alt="hero-image" width={46.61} height={30.3}/>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer;