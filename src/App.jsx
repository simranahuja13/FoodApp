import React , {useState, useEffect}from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

const App =()=>{
  const [allFood , setAllFood]= useState([]);
  const [search , setSearch] = useState('');
  const [loading , setLoading] = useState(false);
      const APP_ID = "b3972793"
      const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0"
    const fetchFoodAPIData = async ()=>{
      try{
        setLoading(true)
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setAllFood(data.hits);
        console.log(data);
        setLoading(false)
      }
      catch(err){
        console.log(err);
        setLoading(false)
      }
    }
return(
 <>
 <Navbar  />
 <SearchBar 
  search = {search}
  setSearch ={setSearch}
  fetchFoodAPIData ={fetchFoodAPIData}
 />
 <ProductCard 
 allFood={allFood}
 loading={loading}
 />

 </>
)
}
export default App ;