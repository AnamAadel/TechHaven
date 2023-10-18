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
    <Marquee>
        {brandLogo.length > 0 && brandLogo.map((item, ind)=> (
            <div key={ind}>
                <img src={item.logo} alt="Logo" />
                <h3>{item.name}</h3>
            </div>

        ))}
    </Marquee>
  )
}

export default Brands