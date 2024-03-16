import React from 'react'
import heroImg from "../images/hero-img.png";

const Hero = () => {
  return (
    <div className='px-[3%] xl:px-[5%] py-4 mx-auto relative z-50'>
        <div className=' mt-[100px] xl:mt-[250px]'> 
            <h1 className=' text-[32px] xl:text-[56px] font-bold text-center md:text-left'>Welcome to the World <br /> of <span className=" text-[#FF4650]">Delicious</span> Recipe</h1>
            <p className=' md:w-[50%] xl:w-[32%] leading-loose text-center md:text-left mt-5'>Embark on a fascinating journey through traditional Chinese cuisine. From classic Sichuan dishes to exquisite Cantonese cooking, we'll take you on a flavorful adventure through the wonders of Chinese gastronomy. Start your culinary journey now!</p>
        </div>
        <img src={heroImg} alt="" className='absolute md:w-[400px] xl:w-auto top-14 xl:top-[28%] right-6 xl:right-[20%] z-50 hidden md:block' />
        <div className=' flex justify-center md:block'>
            <button className="bg-[#3E3636] px-3 py-3 mt-8 text-white rounded-md">Explore Now</button>
        </div>
    </div>
  )
}

export default Hero