import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandCard from '../components/BrandCard';

function UserProducts() {
    const userProducts = useLoaderData();
    console.log(userProducts)
    return (
        <div className="container mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-6">
            {userProducts?.products?.length > 0 && userProducts?.products?.map((item) => (
                <BrandCard key={item._id} item={item} isDelete={true} />

            ))}
        </div>
    )
}

export default UserProducts