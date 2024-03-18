import React from 'react'
import img1 from "../../images/dumpling.jpg"
import { IoMdTime } from "react-icons/io";
import { IoFlagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import imgNotFound from "../../images/img_not_found.jpg"

const RecipeCard = ({ recipe }) => {
  return (
    <div className=' border w-[23%] my-2 mb-4 mx-2 rounded-lg hover:-translate-y-1 hover:duration-200'>
      <Link to={`/recipes/${recipe._id}`}>
        <img src={recipe.Image || imgNotFound} className=' w-full h-[257px] object-cover object-center rounded-tl-lg rounded-tr-lg' alt="" />
      </Link>
        <div className=' my-4 mx-4'>
            <h4 className=' font-semibold text-[17px]'>{recipe.Name.substr(0, 35)}{recipe.Name.length > 35 && "..."}</h4>
            <div className='flex justify-between mb-4'>
              {/* <p className=' text-gray-500 mt-2 text-[15px] flex items-center'><IoFlagOutline className=' text-xl mr-1' /> {recipe.difficulty}</p> */}
            </div>
        </div>
    </div>
  )
}

export default RecipeCard