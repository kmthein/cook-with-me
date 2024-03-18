import React from 'react'
import img1 from "../../images/dumpling.jpg"
import { IoMdTime } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";

const RecipeCard = () => {
  return (
    <div className=' border w-[23%] my-2 mx-2 rounded-lg'>
        <img src={img1} className=' w-full h-[257px] object-cover object-center rounded-tl-lg rounded-tr-lg' alt="" />
        <div className=' my-4 mx-4'>
            <h4 className=' font-semibold text-[17px]'>Chinese Dumpling</h4>
            <div className='flex justify-between mb-4'>
              <p className=' text-gray-500 mt-2 text-[15px] flex items-center'><IoMdTime className=' text-red-500 text-xl mr-1' /> 30 min</p>
              <p className=' text-gray-500 mt-2 text-[15px] flex items-center'><IoFlagOutline className=' text-xl mr-1' /> Easy</p>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard