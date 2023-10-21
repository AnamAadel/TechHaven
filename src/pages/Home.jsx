import Brands from '../components/Brands'
import Facilities from '../components/Facilities'
import Hero from '../components/Hero'
import Products from '../components/Products'

function Home() {
  return (
    <div className='' >
        <Hero />
        <Brands />
        <Products />
        <Facilities />
        
        {/* <Services /> */}
        {/* <Testimonials /> */}
    </div>
  )
}

export default Home