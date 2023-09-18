import React from "react";
const ProductCard = ({ allFood, loading }) => {
    return (
        <>
            {loading ?
                <div className="flex justify-center">
                    <img className="w-16 py-20 src=" src="https://i.gifer.com/ZZ5H.gif" alt="" />
                </div>
                :
                
                    <div className="main px-4 flex flex-wrap">
                        {allFood.map((item, index) => {
                            const { label, calories, dishType, cuisineType, image } = item.recipe
                            return (
                                <div key={index} className="md:w-1/4  w-full p-4">
                                    <div className="content bg-[#F8EFBA] p-4 rounded-xl border-2 border-gray-600 hover:-translate-y-1">
                                        <img className="rounded-xl w-full mb-2" src={image} alt="image" />
                                        <h1 className="text-lg font-bold ">{label.substr(0, 20)}</h1>
                                        <h2 className="mb-2"> <span className="bold">Calories:</span> {calories}</h2>
                                        <h2 className="mb-2"> <span className="bold">DishType:</span> {dishType}</h2>
                                        <h2 className="mb-2"><span className="bold"> Cuisines:</span>{cuisineType}</h2>
                                        <div className="flex justify-between">
                                            <button className="bg-[#706fd3] px-5 py-1.5 rounded-lg">Add to Cart</button>
                                            <button className="bg-[#ff4757] px-5 py-1.5 rounded-lg">BUY NOW </button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                
            }

                </>
    );
}
            export default ProductCard;

