import React from 'react'
import { Link } from 'react-router-dom'

function BrandCard() {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-b-2">
                <figure className='p-4 px-16 max-w-xs'>
                <img src="https://m.media-amazon.com/images/I/41jjlUMVbUL._AC_SX679_.jpg" alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/detail/2`} className="btn btn-primary">Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandCard