import Brands from '../components/Brands'
import Hero from '../components/Hero'
import ProductCategories from '../components/ProductCategories'

function Home() {
  return (
    <div className='' >
        <Hero />
        <Brands />
        <ProductCategories />
        
        {/* <Services /> */}
        {/* <Testimonials /> */}
    </div>
  )
}

export default Home