import React from 'react'
import advertising from "../../images/advertising.jpg";

const Advertising = () => {
  return (
    <div className=' mt-40 h-[700px] relative'>
        <img src={advertising} className=' h-[700px] w-full object-cover' />
        <div className=' bg-white rounded-lg absolute top-[45%] left-[50%] w-[28%] py-12 px-8'>
            <h3 className=' text-2xl font-bold'>+100 Delicious Recipes That Easy to Cook and Quick</h3>
            <p className='mt-4'>Find the perfect food ideas to start your day with quickly and easily</p>
        </div>
    </div>
  )
}

export default Advertising