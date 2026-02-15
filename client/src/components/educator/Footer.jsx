import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="text-left w-full px-8 border-t-[2px] border-gray-300 py-3">
      <div className="flex px-4 md:flex-row flex-col items-center justify-between">
        <div className=" items-center flex font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl select-none">
          <Link to="/" className="cursor-pointer">
            <span className="text-blue-600">Veu</span>
            <span>Demy</span>
          </Link> 
          <span className=" text-gray-500 font-light mx-3">|</span>
          <span className="text-xs font-medium text-gray-500">
            Copyright 2026 © Veudemy. All Right Reserved.
          </span>
        </div>
        <div className="flex space-x-2">
          <a href="https://www.facebook.com">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
          </a>
          <a href="https://x.com/ak_ar_sh_">
            <img src={assets.twitter_icon} alt="Twitter Icon" />
          </a>
          <a href="https://www.instagram.com/_ak.ar.sh_">
            <img src={assets.instagram_icon} alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
