import React from "react";
import img from "../images/proimage.jpeg"

const HeroSection = () => {
    return (
        <div>
        <div className="flex h-[700px] mt-10 absolute items-center">
        <div className="ml-20 w-[1017px] h-[474px] ">
            <div className="flex gap-1 w-[234px] h-[40px] rounded-full bg-black text-white text-center text-sm font-semibold py-2 px-4">
             👋<span className="text-sm ">Let’s Save our Environment</span>
            </div>
            <div className="w-[615px] h-[248px] flex flex-col gap-5">
                <h1 className="text-6xl font-bold mt-5 text-[#2D2D2D]">Optimize your eco reporting with </h1>
                <h1 className="w-[578px] text-white h-[97px] text-6xl font-bold bg-[#FEAB4F] rounded-full tracking-tighter  py-4 text-center
                 ">CARBON CRUNCH</h1>
            </div>
            <div className="w-[680px] h-[62px] mt-6">
            <span className="text-[#28B30E] tracking-normal font-black text-2xl text-[#2D2D2D]">95%</span> <span className="tracking-normal
       w-[687px] h-[62px] font-medium text-2xl text-[#2D2D2D]">Accurate Carbon Calculations Trusted by Industry Leaders</span>
            </div>
            <div className="flex gap-4 mt-10">
                <button className=" rounded-md py-3 px-5 font-bold text-xl text-green-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Free Calculator</button>
                <button className="rounded-md py-3 px-5 font-bold text-xl bg-[#28B30E] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Book Demo</button>
            </div>
        </div>
        <div>
            <img src={img} className="w-[642px] h-[497px] rounded-2xl mr-100" />
        </div>
        </div>
        </div>
    );
    }
export default HeroSection;