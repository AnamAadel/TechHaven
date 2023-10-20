import React from 'react';
import { ToastContainer } from 'react-toastify';
import BrandCard from '../components/BrandCard';
import { AuthContexts } from '../components/context/AuthContext';

function MyCart() {
    const {cartProduct} = AuthContexts();
  return (
    <div className='container mx-auto grid grid-cols-1 2xl:grid-cols-2'>
    <ToastContainer />
        {cartProduct?.length > 0 ? cartProduct?.map((item)=> (
            <BrandCard key={item._id} item={item} isDelete={true} />
        )):
        <img src="https://cdn.vectorstock.com/i/preview-1x/84/72/flat-design-no-data-error-vector-47758472.webp" className="mx-auto h-screen max-[400px]" />
        }
    </div>
  )
}

export default MyCart