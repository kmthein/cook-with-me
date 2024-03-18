import React, { useEffect, useState } from "react";
import RecipeCard from "../components/recipe/RecipeCard";
import axios from "axios";
import { Pagination } from "flowbite-react";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const totalPages = Math.ceil((recipes.length + 1) / recipesPerPage);

  const getRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/recipes`);
      setRecipes(response.data.recipes);
    } catch (error) {}
    setLoading(false);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect(() => {
    getRecipes();
  }, []);

  const paginate = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="mt-20 px-[3%] xl:px-[5%] mx-auto mb-8 h-screen">
      <h1 className=" text-[22px] font-semibold text-center md:text-left">
        All Recipes
      </h1>
      <div className="mt-4 flex flex-wrap">
        {loading && <p>Loading...</p>}
        {recipes &&
          recipes.length > 0 &&
          currentRecipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
      </div>
      {recipes.length > 8 && (
        <div className="flex overflow-x-auto sm:justify-center items-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default AllRecipes;
