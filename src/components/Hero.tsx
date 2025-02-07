import React from 'react'
import Image from 'next/image'
import CustomerCarousel from './CustomerReview';
import Dress from './DressStyle';
import TopSell from './TopSell';
import NewArrivals from './NewArrivals';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='wrapper overflow-x-hidden'>
       <section className="text-gray-600 body-font lg:mt-[-82px]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl lg:text-5xl lg:font-bold
       mb-4 font-bold text-black">
      FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="mb-8 leading-relaxed">
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <div className="flex justify-center">
        <Link href={"/shopnow"}>
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src={"/images/Pic 1.svg"} alt="hero-image" width={1440} height={663}/>
    </div>
  </div>
</section>
       
      <div>
        <div className='bg-black flex space-x-20 justify-center h-[122px] lg:mt-[-96px]'>
        <Image src={"/images/Group.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/zara-logo-1 1.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/gucci-logo-1 1.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/prada-logo-1 1.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/Group (1).svg"} alt="hero-image" width={166.48} height={33.16}/>
        </div>
      </div>

      <div>
        <NewArrivals/>
        <TopSell/>
        <Dress/>
        <CustomerCarousel/>
        
      </div>
      
    </div>
  )
}

export default Hero;
