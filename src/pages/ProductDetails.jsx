
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import BrandCard from "../components/BrandCard";
import Stars from "../components/Stars";
import { AuthContexts } from "../components/context/AuthContext";


function ProductDetails() {
    const [relatedProduct, setRelatedProduct] = useState([]); 
    const [showSemple, setShowSemple] = useState(0);
    const loaderData = useLoaderData();
    const {mongoCurrentUser, setCartProduct, cartProduct} = AuthContexts();
    
    
    const [qty, setQty] = useState(1);

    const handleAddToCart = async ()=> {
        console.log("click")
        const userProduct = { ...loaderData, qty: qty}
        try {
            const res = await fetch(`http://localhost:5000/users/update/${mongoCurrentUser._id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(userProduct)
            });
            const jsonData = await res.json();
            // setMongoCurrentUser(jsonData);
            if(jsonData.modifiedCount > 0){
                mongoCurrentUser.products.forEach((product)=> {
                    if(product._id === loaderData._id){
                        product.qty = qty;
                    }
                })

                const productIndex = cartProduct?.findIndex((item)=> item.id === userProduct.id);
                if(productIndex >= 0){
                    const newProduct = [...cartProduct];
                    newProduct.splice(productIndex, 1, userProduct)
                    setCartProduct(newProduct)
                }else{
                    setCartProduct([...cartProduct, userProduct])
                }
                
                toast.success("Product added to the cart successfully!", {
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

     const incrementAndDecrement = (val)=>{
        if(val == "increament"){
            setQty(qty + 1)
        }
        if(val == "decreament"){
            qty > 1 && setQty(qty - 1)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:5000/products/type/${loaderData.type}`);
                const data = await res.json();
                console.log(data)
                setRelatedProduct(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

        const userCurrentProduct = mongoCurrentUser?.products?.find(item => item._id === loaderData._id);
        console.log(userCurrentProduct)
    if(userCurrentProduct){
        setQty(userCurrentProduct?.qty)
        
    }else{
        setQty(1)

    }
    }, [loaderData,mongoCurrentUser])
    
  return (
    <>
            <div className="flex w-[90%] m-auto gap-4 items-center mt-[3rem] mb-[4rem]">
            <ToastContainer />
                    <div className="flex items-center gap-4 border-r-2 border-gray-500 pr-4 text-[#9F9F9F]">
                    <Link to="/">Home</Link><span><AiOutlineRight /></span>
                    </div>
                    <span className="font-medium">{loaderData.name}</span>
            </div>
                {/* product details */}
            <div
                className="flex w-[90%] m-auto gap-4 items-start flex-wrap md:flex-nowrap pb-8"
            >
                
                <div className="flex gap-4 w-full md:w-1/2 flex-col md:flex-row">
                
                <div
                    className="flex flex-row md:flex-col order-2 md:order-1 w-full md:w-[5.2rem] gap-6"
                >
                    {/* {singleProduct?.image.map((img,index)=>(
                        <div className="w-full h-[3.5rem] bg-[#FFF9E5] rounded-md p-2 cursor-pointer group" onClick={()=> setShowSemple(index)} key={index}>
                        <img
                            src={img}
                            alt="Outdoor bar table and stool"
                            className="w-full h-full object-contain transition-all group-hover:scale-125"
                        />
                        </div>

                    ))} */}
                </div>
                
                <div
                    className="flex justify-center items-center w-full h-[30rem] bg-slate-100 p-3 order-1 md:order-2"
                >
                    <img src={loaderData.image} alt="" className="w-full h-full object-contain transition-all mix-blend-multiply" />
                </div>
                </div>
                
                <div
                className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-start"
                >
                <h3 className="text-[2.625rem]">{loaderData.name}</h3>
                <h4 className="text-[1.5rem]">{loaderData.price}</h4>
                <div className="flex items-center gap-6 justify-center md:justify-start">
                    <Stars /> <b className="text-2xl">{loaderData.rating}</b>
                    <p className="text-[0.8125rem] text-[#9F9F9F]">500 Customer Review</p>
                </div>
                <p className="text-[0.8125rem;]">
                    {loaderData.description}
                </p>
                
                <ul className="space-y-3 text-gray-500 border-t-2 border-gray-500 pt-10">
                    <li>Brand Name : {loaderData.brand}</li>
                    <li>Category : {loaderData.type}</li>
                    <li className="text-2xl flex items-center justify-center md:justify-start gap-3 text-neutral">
                    Share : <a href="#"><BiLogoFacebookCircle /></a> <a href="#"><BiLogoTwitter /></a> <a href="#"><BiLogoInstagramAlt /></a>
                    </li>
                </ul>

                <div className="space-y-4">
                    <p className="text-[#9F9F9F]">Colors</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        className="w-[1.875rem] h-[1.875rem] rounded-[50%] bg-[#816DFA]"
                    ></div>
                    <div
                        className="w-[1.875rem] h-[1.875rem] rounded-[50%] bg-[#000000]"
                    ></div>
                    <div
                        className="w-[1.875rem] h-[1.875rem] rounded-[50%] bg-[#CDBA7B]"
                    ></div>
                    </div>
                </div>

                
                <div
                    className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-start" >
                    <div
                    className="flex gap-6 items-center border-2 rounded-lg border-gray-500 p-4 self-start"
                    >
                    <AiOutlineMinus className="font-medium text-[1.5rem] cursor-pointer" onClick={()=> incrementAndDecrement("decreament")} />
                    <span className="py-2 px-4 select-none">{qty}</span>
                    <AiOutlinePlus className="font-medium text-[1.5rem] cursor-pointer" onClick={()=> incrementAndDecrement("increament")} />
                    </div>
                    <div
                    className="flex gap-6 items-center border-2 rounded-lg border-gray-500 py-5 px-4 self-start hover:bg-sweet-yellow"
                    >
                    <span className="cursor-pointer font-medium text-[1.35rem] select-none capitalize"
                       onClick={handleAddToCart} >Add to card</span>
                    </div>
                </div>
                
                
                
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-6">
                {relatedProduct.length > 0 && relatedProduct.map((item)=> (
                    <BrandCard key={item._id} item={item} />
                ))}

            </div>
    </>
  )
}




export default ProductDetails