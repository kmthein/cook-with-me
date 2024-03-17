import React, { useState } from "react";
import { Button, Drawer } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

  return (
    <div className=" px-[3%] xl:px-[5%] py-4 mx-auto relative">
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-[25px] xl:text-[32px] tracking-widest">
          CookWith<span className=" text-[#FF4650]">Me</span>
        </h1>
        <div className=" z-50 gap-20 2xl:gap-80 items-center hidden xl:flex">
          <ul className="flex gap-12 text-white duration-150">
            <li className=" hover:cursor-pointer hover:font-medium">Home</li>
            <li className=" hover:cursor-pointer hover:font-medium">Recipes</li>
            <li className=" hover:cursor-pointer hover:font-medium">Add Recipe</li>
            <li className=" hover:cursor-pointer hover:font-medium">About Us</li>
          </ul>
          <div>
              <button className="bg-white w-20 py-2 rounded-md">Log in</button>
          </div>
        </div>
        <div className=" z-50 xl:hidden">
            <button onClick={showDrawer}><GiHamburgerMenu className=" text-white text-xl" /></button>
        </div>
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </div>
      <svg
        className=" absolute right-0 top-[-270px] md:top-[-200px] xl:top-0 z-10 md:w-[55%] w-[60%] xl:h-[600px] 2xl:h-[833px]"
        viewBox="0 0 813 733"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M152.991 458.196C67.6176 367.055 -6.6273 261.92 1.51939 154.939C10.6774 47.4018 101.469 -62.2235 167.738 -157.733C234.26 -254.039 274.742 -336.712 329.889 -428.746C385.036 -520.781 454.341 -623.214 535.471 -628.969C615.843 -634.965 708.294 -545.079 789.639 -483.269C871.238 -422.254 942.49 -389.075 985.676 -333.265C1028.61 -276.658 1043.48 -197.42 1109.13 -102.03C1175.04 -7.43534 1292.25 104.349 1297.76 202.524C1304.02 300.94 1199.09 386.784 1100.98 480.056C1002.61 574.124 911.066 675.62 801.36 713.486C690.642 751.908 561.762 726.698 448.566 675.797C335.371 624.895 238.617 548.542 152.991 458.196Z"
          fill="#FF4650"
        />
      </svg>
    </div>
  );
};

export default Navbar;
