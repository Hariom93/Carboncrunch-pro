import React from "react";
import img2 from "../images/featureimg1.png"

const Features = () => {
    return(
        <div className="absolute top-310">
            <div className="w-[580px] h-[135px] left-60 flex flex-col gap-10 ml-20">
             <p className="ml-16 text-xl text-[#239C0C] font-bold tracking-tighter">FEATURES</p>
             <h1 className=" Aeonik TRIAL font-bold text-6xl tracking-tighter text-[#FEAB4F]">Why <span className="text-[#2D2D2D] Aeonik TRIAL font-bold text-6xl tracking-tighter">Carbon Crunch?</span></h1>
             </div>
             <div className="rounded-xl mt-16 w-[1320px] h-[605px] bg-[#F5F5F8] ml-25 ">

                <div className="flex  ml-6 gap-x-4 ">
                   <div className="rounded-xl w-[415px] h-[273.5px] bg-white p-[22px] mt-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border">
                    <p className=" absolute rounded-2xl w-[55.04545593261719px] h-[55.04545593261719px] bg-[#D6FFD0]"></p>
                    <img src={img2} className="relative top-4 left-3"/>
                    <h1 className="font-bold text-2xl mt-10">Automated Data Collection</h1>
                    <p className="mt-4 text-sm h-[57px] w-[371.5111083984375px]">Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                   </div>

                   <div className="rounded-xl w-[415px] h-[273.5px] bg-white p-[22px] mt-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border">
                    <p className=" absolute rounded-2xl w-[55.04545593261719px] h-[55.04545593261719px] bg-[#D6FFD0]"></p>
                    <img src={img2} className="relative top-4 left-3"/>
                    <h1 className="font-bold text-2xl mt-10">Automated Data Collection</h1>
                    <p className="mt-4 text-sm h-[57px] w-[371.5111083984375px]">Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                   </div>

                   <div className="rounded-xl w-[415px] h-[273.5px] bg-white p-[22px] mt-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border">
                    <p className=" absolute rounded-2xl w-[55.04545593261719px] h-[55.04545593261719px] bg-[#D6FFD0]"></p>
                    <img src={img2} className="relative top-4 left-3"/>
                    <h1 className="font-bold text-2xl mt-10">Automated Data Collection</h1>
                    <p className="mt-4 text-sm h-[57px] w-[371.5111083984375px]">Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                   </div>
                   </div>


                   <div className="flex mt-5 ml-6 gap-x-4">
                   <div className="rounded-xl w-[415px] h-[273.5px] bg-white p-[22px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border">
                    <p className=" absolute rounded-2xl w-[55.04545593261719px] h-[55.04545593261719px] bg-[#D6FFD0]"></p>
                    <img src={img2} className="relative top-4 left-3"/>
                    <h1 className="font-bold text-2xl mt-10">Automated Data Collection</h1>
                    <p className="mt-4 text-sm h-[57px] w-[371.5111083984375px]">Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                   </div>
                   <div className="rounded-xl w-[415px] h-[273.5px] bg-white p-[22px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border">
                    <p className=" absolute rounded-2xl w-[55.04545593261719px] h-[55.04545593261719px] bg-[#D6FFD0] "></p>
                    <img src={img2} className="relative top-4 left-3"/>
                    <h1 className="font-bold text-2xl mt-10">Automated Data Collection</h1>
                    <p className="mt-4 text-sm h-[57px] w-[371.5111083984375px]">Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                   </div>
                   <div className="rounded-xl w-[415px] h-[273.5px] bg-white p-[22px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border">
                    <p className=" absolute rounded-2xl w-[55.04545593261719px] h-[55.04545593261719px] bg-[#D6FFD0]"></p>
                    <img src={img2} className="relative top-4 left-3"/>
                    <h1 className="font-bold text-2xl mt-10">Automated Data Collection</h1>
                    <p className="mt-4 text-sm h-[57px] w-[371.5111083984375px]">Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.</p>
                   </div>
                </div>
             </div>
        </div>
    )
}
    export default Features;