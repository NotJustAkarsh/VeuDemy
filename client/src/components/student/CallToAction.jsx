import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="p-16">
      <div>
        <h1 className="text-4xl font-semibold">Learn anything, anytime, anywhere</h1>
        <p className="text-sm md:text-base text-gray-500 m-4">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam <br /> aliqua proident excepteur commodo do ea.
        </p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <button className="cursor-pointer bg-blue-500 text-white py-3 px-8 rounded-sm text-sm active:scale-95">Get Started</button>
        <button className="cursor-pointer text-sm py-3 px-8 flex gap-2 hover:scale-102">Learn More <img src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  );
};

export default CallToAction;
