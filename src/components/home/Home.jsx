import Covide from '../covide-19/Covide-19'
// import Footer from '../footer/Footer'
import Landing from '../landing/landing'
import NewProductTitle from '../new product title/NewProductTitle'
import Product3Swiper from '../product3Swiper/Product3Swiper'
import Section3 from '../section3/Section3'


export default function Home() {
  return (
    <>
      <Landing />
      <NewProductTitle />
      <Product3Swiper count={3} />
      <Section3 />
      <Section3 directionLeft={false} />
      <Covide />
    </>
  )
}
