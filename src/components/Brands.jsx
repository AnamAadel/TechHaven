import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

function Brands() {
    const [brandLogo, setBrandLogo] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("brandsData.json");
                const data = await res.json();
                console.log(data.products)
                setBrandLogo(data.brands);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="container mx-auto py-8">
            <Marquee>
                    {brandLogo.length > 0 && brandLogo.map((item, ind) => (
                        <div key={ind} className='w-52 justify-between flex flex-col gap-4 items-center'>
                            <img src={item.logo} alt="Logo" className='h-[120px]' />
                            <h3 className='font-bold text-2xl'>{item.name}</h3>
                        </div>

                    ))}
            </Marquee>
        </div>
    )
}

export default Brands