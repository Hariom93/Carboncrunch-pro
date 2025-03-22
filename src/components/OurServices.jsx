import React from "react";
import img3 from "../images/service.png"
import img4 from "../images/Group.png"

const OurServices = () => {
    return(
       <div className="absolute top-530 h-[1000px]">
        <div className="flex">
        <div className="w-[986px] h-[657px] absolute mt-20">
            <img src={img3} />
        </div>
        <div className="relative left-170">
        <div className="w-[580px] h-[135px] flex flex-col gap-6 ">
             <p className="ml-16 text-xl text-[#239C0C] font-bold tracking-tighter">OUR SERVICES</p>
             <h1 className=" Aeonik TRIAL font-bold text-6xl tracking-tighter text-[#FEAB4F]">What <span className="text-[#2D2D2D] Aeonik TRIAL font-bold text-6xl tracking-tighter">do we do?</span></h1>
             </div>
             <div>
        <div className="flex flex-col gap-y-4 rounded-xl w-[731px] h-[295px] bg-[#F5F5F8] p-[22px] mt-5 hover:scale-75  transition-all
             duration-500 z-50">
                            <h1 className="font-bold text-2xl mt-3 Aeonik TRIAL text-5xl">GHG Accounting</h1>
                            <p className="mt-4 text-base h-[62.99999845873357px] w-[682.9999832907148]">We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
                            <button className="cursor-pointer rounded-md w-[180px] h-[41px] bg-[#D6FFD0] py-[10px] px-[22px] font-bold text-[#28B30E]">See More Details</button>
         </div>
         <div className="absolute flex flex-col gap-y-4 rounded-xl w-[731px] h-[295px] bg-[#F5F5F8] p-[22px] mt-5 mt-5 hover:scale-75  transition-all ">
                            <h1 className="font-bold text-2xl mt-3 Aeonik TRIAL text-5xl">GHG Accounting</h1>
                            <p className="mt-4 text-base h-[62.99999845873357px] w-[682.9999832907148]">We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.</p>
                            <button className=" cursor-pointer rounded-md w-[180px] h-[41px] bg-[#D6FFD0] py-[10px] px-[22px] font-bold text-[#28B30E]">See More Details</button>
         </div>
         <div className="relative top-70 left-80">
            <p className=" absolute bg-[#FFF1DA] w-[56px] h-[56px] rounded-full"></p>
            <img src={img4} className="relative top-2 left-2"/>
         </div>
         </div>
         </div>
       </div>
       </div>
    )
}

export default OurServices;