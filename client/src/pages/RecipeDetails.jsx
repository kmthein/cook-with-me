import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import img1 from "../images/dumpling.jpg";
import { Checkbox } from "antd";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import imgNotFound from "../images/img_not_found.jpg";

const RecipeDetails = () => {
  const onChange = (e) => {
    console.log(`${e.target.checked} = ${e.target.value}`);
  };

  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  const getRecipeById = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/recipes/${id}`
      );
      setRecipe(response.data.recipe);
    } catch (error) {}
  };

  useEffect(() => {
    getRecipeById();
  }, []);

  console.log(recipe);

  return (
    <div className="px-[3%] xl:px-[5%] py-4 mx-auto relative z-50 mb-40 2xl:min-h-screen">
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <Link to="/recipes">Recipe</Link>,
          },
          {
            title: recipe?.Name,
          },
        ]}
      />
      <div className="mt-6 flex gap-20">
        <div className=" w-[35%]">
          <img
            src={recipe?.Image || imgNotFound}
            alt=""
            className=" w-full h-[600px] object-cover object-center"
          />
          {/* <div className="flex gap-20 mt-4">
            <div className=" border-r-2 px-20 text-center">
              <h5 className=" font-semibold text-gray-400">Difficulty:</h5>
              <p className=" font-semibold">{recipe?.difficulty}</p>
            </div>
            <div className=" border-r-2 pr-20 text-center">
              <h5 className=" font-semibold text-gray-400">Portion:</h5>
              <p className=" font-semibold text-center">{recipe?.portion}</p>
            </div>
            <div className="text-center">
              <h5 className=" font-semibold text-gray-400">Time:</h5>
              <p className=" font-semibold">{recipe?.time}</p>
            </div>
          </div> */}
          <div className=" mt-8 leading-7">
            <p>{recipe?.description}</p>
          </div>
          
        </div>
        <div className=" w-[45%]">
        <h1 className=" text-[20px] xl:text-[22px] 2xl:text-[30px] font-semibold text-center md:text-left mb-8">
        {recipe?.Name}
      </h1>
      <div>
        <h5 className="mb-1 text-xl font-semibold">Category</h5>
        {recipe?.UserType == "001" ? "အသားဟင်း" : "သက်သက်လွတ်"}
      </div>
          <div className="mt-8">
            <h5 className="mb-1 text-xl font-semibold">Ingredients</h5>
            {/* {recipe?.ingredients?.length > 0 &&
              recipe.ingredients.map((ingre, i) => (
                <div className="mb-1" key={i}>
                  <Checkbox
                    onChange={onChange}
                    value={i}
                    className=" font-normal text-[16px]"
                  >
                    {ingre}
                  </Checkbox>
                </div>
              ))} */}
              <pre className=" leading-loose">
              {
                recipe?.Ingredients
              }
              </pre>
          </div>
          <div className="mt-8">
            <h5 className="mb-2 text-xl font-semibold">Instructions</h5>
            <p className=" leading-loose">{recipe?.CookingInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
