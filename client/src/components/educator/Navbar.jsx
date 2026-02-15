import React, { useContext } from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const educatorData = dummyEducatorData;

  const { user } = useUser();

  return (
    <div className="flex items-center border-b-[2px] border-gray-300 py-3 justify-between px-4 md:px-8">
      <Link to="/">
        <div className="cursor-pointer font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl select-none">
          <span className="text-blue-600">Veu</span>
          <span>Demy</span>
        </div>
      </Link>
      <div className="flex space-x-5 items-center relative text-gray-500">
        <p>Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
