import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';

function Brands() {
    const [brandLogo, setBrandLogo] = useState([])
    const navigation = useNavigate();


    const handleNavigate = (brandName)=> {
        navigation(`/brand_products/${brandName}`)
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/brands/all");
                const data = await res.json();
                console.log(data)
                setBrandLogo(data);
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
                        <div onClick={()=> handleNavigate(item.name)} key={ind} className='w-52 justify-between flex flex-col gap-4 items-center cursor-pointer'>
                            <img src={item.logo} alt="Logo" className='h-[120px]' />
                            <h3 className='font-bold text-2xl'>{item.name}</h3>
                        </div>

                    ))}
            </Marquee>
        </div>
    )
}

export default Brands