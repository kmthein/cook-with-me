import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  return (
    <div className=" px-[3%] xl:px-[5%] py-4 mx-auto relative">
      <div className=" flex justify-between items-center">
        <Link to="/">
          <h1 className=" font-semibold text-[25px] xl:text-[32px] tracking-widest">
            CookWith<span className=" text-[#FB7E0B]">Me</span>
          </h1>
        </Link>
        <div className=" z-50 gap-20 2xl:gap-80 items-center hidden xl:flex">
          {location.pathname == "/" ? (
            <ul className="flex gap-12 text-white duration-150">
              <Link to="/">
                <li className=" hover:cursor-pointer hover:font-medium">
                  Home
                </li>
              </Link>
              <Link to="/recipes">
                <li className=" hover:cursor-pointer hover:font-medium">
                  Recipes
                </li>
              </Link>
              <li className=" hover:cursor-pointer hover:font-medium">
                Add Recipe
              </li>
              <li className=" hover:cursor-pointer hover:font-medium">
                About Us
              </li>
            </ul>
          ) : (
            <ul className="flex gap-12 duration-150">
              <Link to="/">
                <li className=" hover:cursor-pointer hover:font-medium">
                  Home
                </li>
              </Link>
              <Link to="/recipes">
                <li className=" hover:cursor-pointer hover:font-medium">
                  Recipes
                </li>
              </Link>
              <li className=" hover:cursor-pointer hover:font-medium">
                Add Recipe
              </li>
              <li className=" hover:cursor-pointer hover:font-medium">
                About Us
              </li>
            </ul>
          )}
          <div>
            <button className="bg-white w-20 py-2 rounded-md">Log in</button>
          </div>
        </div>
        <div className=" z-50 xl:hidden">
          <button onClick={showDrawer}>
            <GiHamburgerMenu className=" text-white text-xl" />
          </button>
        </div>
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
