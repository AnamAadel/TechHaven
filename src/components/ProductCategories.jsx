import React, { useEffect, useState } from 'react';


function ProductCategories() {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("facilities.json");
                const data = await res.json();
                console.log(data.facilities)
                setCategoryData(data.facilities);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
            {categoryData.length > 0 && categoryData.map((item, ind)=> (
                <div key={ind} className='flex flex-col items-center py-4 gap-2 shadow-xl  transition-all duration-300 border-2 border-white hover:border-gray-300'>
                    <img src={item.image} alt="" className='h-12' />
                    <h3 className='font-bold text-xl'>{item.title}</h3>
                    <h4 className='text-base'>{item.sub_title}</h4>
                </div>
            
            ))}
        </div>
    );
}

export default ProductCategories