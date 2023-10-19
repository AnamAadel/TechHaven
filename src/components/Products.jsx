import React, { useEffect, useState } from 'react';
import Card from './Card';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:5000/products/all");
                const data = await res.json();
                console.log(data.products)
                setProducts(data.products);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
  return (
    <div  className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.length > 0 && products.map((item, ind)=> (
            <Card item={item} key={ind} />

        ))}
        
    </div>
  )
}

export default Products