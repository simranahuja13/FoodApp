import React from "react";
const SearchBar=({search , setSearch , fetchFoodAPIData})=>{
    return(
        <div className="main flex justify-center pt-10">
            <input
             type="text"
             placeholder="Search your favourite food 😋 " 
             className="bg-gray-200 py-1.5 px-2 w-80
             border-2  border-gray-400 rounded-l-lg outline-none"
             value={search}
             onChange={(e)=>{
                // console.log(e.target.value)
               setSearch(e.target.value)
             }}
             />
             <button onClick={fetchFoodAPIData} className="bg-[#F8EFBA] px-5 py-1.5
             border-t-2 border-r-2 border-b-2  border-gray-400 rounded-r-lg">Search</button>
        </div>
    );
}
export default SearchBar