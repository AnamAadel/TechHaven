import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BrandCard from '../components/BrandCard'
import BrandHero from '../components/BrandHero'

const banners = [
"https://www.miit.co.nz/wp-content/uploads/2021/10/give-something-wonderfull-1200x565.jpg",
"https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1662022768_3.jpg",
"https://i0.wp.com/techbuzzireland.com/wp-content/uploads/2021/08/Screenshot-2021-08-05-15.52.11.png?w=1127&ssl=1",
"https://lagadgethub.com/cdn/shop/collections/collection-banner_0002_Group-2-copy_1000x.png?v=1671614351"
]


function BrandProductPage() {
  const brandProduct = useLoaderData();
  console.log(brandProduct)
  return (
    <div>
        <BrandHero banners={banners} />
        <div className="container mx-auto grid grid-cols-1 2xl:grid-cols-2 gap-6">
          {brandProduct.length > 0 && brandProduct.map((item)=> (
            <BrandCard key={item._id} item={item} isDelete={false} />

          ))}
        </div>
    </div>
  )
}

export default BrandProductPage