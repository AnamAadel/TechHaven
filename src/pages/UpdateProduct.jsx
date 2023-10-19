import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function UpdateProduct() {
  const product = useLoaderData();

  const handleForm = async (e)=> {
    e.preventDefault()
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    console.log( name,chef, supplier, taste, category, details, photo);
    const coffee = {name,chef, supplier, taste, category, details, photo, price}

    try {
        const res = await fetch(`http://localhost:5000/coffees/${product._id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
  return (
      <div className="hero-content flex-col mb-24 mt-36 container mx-auto bg-darkGray">
        <Link to="/" className='font-rancho text-2xl  text-coffee '>Go back</Link>
        <div className="text-center space-y-4">
          <h2 className='font-rancho text-4xl text-coffee' style={{ textShadow: "0px 0px 3px #331A15, 2px 2px 10px #331A15, -2px -2px 4px #331A15" }}>Add New Coffee</h2>
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
                <span className="label-text">Chef</span>
              </label>
              <input type="text" name='chef' placeholder="Enter coffee chef" defaultValue={product.chef} className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input type="text" name='supplier' placeholder="Enter coffee supplier" defaultValue={product.chef} className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input type="text" name='taste' defaultValue={product.taste} placeholder="Enter coffee taste" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" name='category' placeholder="Enter coffee category" defaultValue={product.category} className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input type="text" name='details' placeholder="Enter coffee details" defaultValue={product.details} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="text" name='photo' placeholder="Enter coffee url" defaultValue={product.photo} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="number" name='price' placeholder="Enter coffee url" defaultValue={product.price} className="input input-bordered" required />
            </div>
            <div className="form-control mt-6 col-span-full">
              <button className="btn border-2 border-coffee bg-whiteCoffe text-coffee font-rancho" type='submit' >Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default UpdateProduct