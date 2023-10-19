
const categories = ["Smartphone", "Laptop", "Smartwatch", "Tablet", "Wireless Earbuds", "Desktop", "Stylus", "TV", "Gaming Monitor", "Gaming Console", "Headphones", "Mirrorless Camera", "Solid State Drive", "Mini PC", "Smart Display", "Fitness Tracker", "Smart Speaker", "Mesh Router", "Streaming Device", "Electric Scooter"]

function AddProduct() {

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
        const res = await fetch(`http://localhost:5000/coffees/`, {
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
      <div className="hero-content flex-col mb-24 mt-12 container mx-auto">
        <div className="text-center space-y-4">
          <h2 className='font-rancho text-4xl text-coffee' style={{ textShadow: "0px 0px 3px #331A15, 2px 2px 10px #331A15, -2px -2px 4px #331A15" }}>Add New Product</h2>
          <p className='font-raleway text-lg font-medium'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        </div>
        <div className="card flex-shrink-0 w-full">
          <form className="card-body grid grid-cols-1 md:grid-cols-2" onSubmit={handleForm}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter coffee name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name='chef' placeholder="Enter brand name" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-bordered w-full"  name='category' required >
              {categories.map((item, ind)=> (
              <option key={ind} >{item}</option>
              ))}
            </select>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" name='description' placeholder="Write description" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" name='category' placeholder="Enter rating" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name='photo' placeholder="Enter coffee url" className="input input-bordered" required />
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name='price' placeholder="price" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6 col-span-full">
              <button className="btn border-2 border-neutral bg-primary text-coffee" type='submit' >Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddProduct