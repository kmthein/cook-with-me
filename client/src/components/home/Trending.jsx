import React, { useEffect, useState } from 'react'
import RecipeCard from '../recipe/RecipeCard'
import axios from "axios";

const Trending = () => {
  const [feature, setFeature] = useState([]);

  const getFeaturedRecipes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      setFeature(response.data.recipes.slice(0, 4));
    } catch (error) {}
  }

  useEffect(() => {
    getFeaturedRecipes();
  }, [])

  return (
    <div className='mt-20 px-[3%] xl:px-[5%] mx-auto mb-8'>
        <h1 className=' text-[22px] font-semibold text-center md:text-left'>Trending Recipes</h1>
        <div className='mt-4 flex flex-wrap'>
          {
            feature && feature.length > 0 && 
            feature.map((recipe, i) => (
                <RecipeCard recipe={recipe} key={i} />
            ))
          }
        </div>
    </div>
  )
}

export default Trending