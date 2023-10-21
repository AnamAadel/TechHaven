import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function UpdateProduct() {
  const product = useLoaderData();
  const navigation = useNavigate();

  const handleNavigate = ()=> {
    navigation(-1)
  }

  const handleForm = async (e)=> {
    e.preventDefault()
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const rating = e.target.rating.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    
    const coffee = {name,brand, type, rating, image, price}

    try {
        const res = await fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/update/${product._id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
        const data = await res.json()
        if(data.modifiedCount > 0){
          toast.success("Product updated successfully!", {
            theme: "colored",
            toastId: "success"
    
          });
        }
    } catch (error) {
        console.log(error)
        toast.warn(`An error happened`, {
          theme: "colored"
        });
    }
}
  return (
      <div className="hero-content flex-col mb-24 mt-10 container mx-auto bg-darkGray">
      <ToastContainer />
        <button className="btn bg-neutral-focus text-white hover:bg-neutral-focus" onClick={handleNavigate}>Go Back</button>
        <div className="text-center space-y-4">
          <h2 className='font-rancho text-4xl text-coffee' style={{ textShadow: "0px 0px 3px #331A15, 2px 2px 10px #331A15, -2px -2px 4px #331A15" }}>Update Product</h2>
          <p className='font-raleway text-lg font-medium'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <div className="card flex-shrink-0 w-full">
          <form className="card-body grid grid-cols-1 md:grid-cols-2" onSubmit={handleForm}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter coffee name" name='name' defaultValue={product.name} className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name='brand' placeholder="Enter brand name" defaultValue={product.brand} className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input type="text" name='type' placeholder="Enter product type" defaultValue={product.type} className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="number" name='rating' defaultValue={product.rating} placeholder="Enter coffee taste" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name='image' placeholder="Enter coffee url" defaultValue={product.image} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" name='price' placeholder="Enter product price" defaultValue={product.price} className="input input-bordered" required />
            </div>
            <div className="form-control mt-6 col-span-full">
              <button className="btn bg-neutral text-white hover:bg-neutral font-rancho" type='submit' >Submit</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default UpdateProduct