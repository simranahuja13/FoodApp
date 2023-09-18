import React from "react";
const Navbar=()=>{
    return(
   <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#F8EFBA] shadow-md  py-4">
    <div className="left ">
        <h1 className="font-extrabold text-2xl text-center">Food App</h1>
    </div>
    <div className="right">
        <ul className="flex space-x-4 text-lg font-medium justify-center pt-2">
            <li  className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Services</li>
        </ul >
    </div>
   </div>
    );
}
export default Navbar;