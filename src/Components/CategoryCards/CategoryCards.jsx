import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const CategoryCards = () => {
    const [categoryData,setCategoryData]=useState([]);

    useEffect(()=>{
        fetch("https://sabbirhossain-28.github.io/estate-data-json/sagmentData.json")
        .then(res=>res.json())
        .then(data=>setCategoryData(data))
    },[]);
    return (
        <div>
            <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#BB915B] mb-6">What Are You Looking For?</h2>
            <p className="text[#131313B3] mb-6">Discover a diverse range of commercial estates tailored to meet the needs of businesses across various industries. From sleek office towers in bustling downtown districts to versatile retail spaces on vibrant main streets, our curated selection offers prime locations and premium amenities to elevate your business ventures.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24">
                {
                    categoryData.map((data,idx)=><CategoryCard key={idx} data={data}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCards;