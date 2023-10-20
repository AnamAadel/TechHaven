import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContexts } from './context/AuthContext';

function BrandCard({item, isDelete}) {
    const {mongoCurrentUser, setCartProduct, cartProduct} = AuthContexts();

    const handleDeleteItem = async(id)=> {
        console.log({productId: id})
        try {
            const res = await fetch(`http://localhost:5000/users/delete/${mongoCurrentUser._id}`, {
                method: "DELETE",
                body: JSON.stringify({productId: id}),
                headers: {
                    "content-type": "application/json"
                }
            });
            const data = await res.json();
            if(data.modifiedCount > 0){
                console.log(data)
              const filterProducts = cartProduct.filter(item => item._id !== id);
                console.log(filterProducts)
              setCartProduct(filterProducts);

              toast.success("Product deleted successfully!", {
                theme: "colored",
                toastId: "success"
        
              });
            }
            // setRelatedProduct(data);
        } catch (error) {
            console.log(error)

            toast.warn(`An error happened`, {
                theme: "colored"
              });
        }
    }
    return (
        <div>
            <div className="card card-side flex flex-col sm:flex-row bg-base-100 shadow-xl border-b-2">
                <figure className='p-4 px-8 md:px-16 max-w-xs'>
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
                        {isDelete ? <button className="btn bg-neutral text-white hover:bg-neutral" title='Delete' onClick={()=> handleDeleteItem(item._id)}><AiFillDelete className='text-2xl' /></button> : 
                        <Link to={`/products/update/${item._id}`} className="btn bg-neutral text-white hover:bg-neutral">Update</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandCard