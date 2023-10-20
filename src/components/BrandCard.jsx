import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs"
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
                    <h3 className="card-title text-xl"></h3>
                    <p>{item.description}</p>
                    <p><b>Brand</b>: {item.brand}</p>
                    <p><b>Price</b>: {item.price}</p>
                    <p className='flex items-center gap-3'>{item.rating}
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/detail/${item._id}`} className="btn bg-neutral text-white hover:bg-neutral">Detail</Link>
                        <Link to={`/products/update/${item._id}`} className="btn bg-neutral text-white hover:bg-neutral">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandCard