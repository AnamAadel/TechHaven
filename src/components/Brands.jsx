import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

function Brands() {
    const [brandLogo, setBrandLogo] = useState([])
    const navigation = useNavigate();


    const handleNavigate = (brandName)=> {
        navigation(`/brand_products/${brandName}`)
    }
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
                        <Link to={`/${item.name}`} onClick={()=> handleNavigate(item.name)} key={ind} className='w-52 justify-between flex flex-col gap-4 items-center cursor-pointer'>
                            <img src={item.logo} alt="Logo" className='h-[120px]' />
                            <h3 className='font-bold text-2xl'>{item.name}</h3>
                        </Link>

                    ))}
            </Marquee>
        </div>
    )
}

export default Brands