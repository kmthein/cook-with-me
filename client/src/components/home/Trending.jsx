import React from 'react'
import RecipeCard from '../recipe/RecipeCard'

const Trending = () => {
  return (
    <div className='px-[3%] xl:px-[5%] mx-auto mb-8'>
        <h1 className=' text-[22px] font-semibold text-center md:text-left'>Trending Recipes</h1>
        <div className='mt-4 flex flex-wrap'>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
    </div>
  )
}

export default Trending