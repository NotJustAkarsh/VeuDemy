import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start pc-8 md:px-3 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer font-bold text-2xl sm:text-3xl lg:text-4xl"
          >
            <span className="text-blue-600">Veu</span>
            <span className="text-white">Demy</span>
          </div>
          <p className="mt-6 text-center md:text-left text-white/80 text-sm">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the <br /> industry's
            standard dummy text.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="text-white mb-7">Company</h2>
          <ul className="flex gap-4 md:block">
            <li className="text-white/80">
              <a href=""> Home</a>
            </li>
            <li className="text-white/80">
              <a href=""> About Us</a>
            </li>
            <li className="text-white/80">
              <a href=""> Contact Us</a>
            </li>
            <li className="text-white/80">
              <a href=""> Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full hidden lg:block">
          <h2 className="text-white mb-6 ">Subscribe to our Newsletter</h2>
          <p className="text-white/80 mb-5">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="flex items-center gap-2">
            <input className="py-2 px-3 border-gray-200 border rounded text-white/80 outline-none " type="text" placeholder="Enter your email" />
            <button className="bg-blue-500 text-white py-2 px-3 rounded">Subscribe</button>
          </div>
          
        </div>
      </div>
      <p className="text-center text-xs text-white/60 py-4">
        Copyright 2024 © Edemy. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
