import React from 'react'
import { Link } from 'react-router-dom'

function BrandCard({item}) {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-b-2">
                <figure className='p-4 px-16 max-w-xs'>
                <img src={item.image} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{item.name}</h2>
                    <h3 className="card-title text-xl">{item.brand}</h3>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/detail/2`} className="btn btn-primary">Detail</Link>
                        <Link to={`/products/detail/2`} className="btn btn-primary">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandCard