import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Navigation } from 'swiper';
import { Navigation } from 'swiper/modules';  // تحديث استيراد Navigation

import './Product3Swiper.css'
import { Container } from 'react-bootstrap';
import Image from './image.png'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Product3Swiper({ count = 3, checkIfBig = false }) {
  return (
    <Container className='show3Products my-2'>
      <Swiper
        // إعدادات Swiper
        modules={[Navigation]} // إضافة ميزة التنقل
        spaceBetween={50} // المسافة بين كل منتج والآخر
        slidesPerView={count} // عدد المنتجات التي تظهر في الشاشة
        navigation // تفعيل زر التنقل
      // dir='rtl'
      >
        {/* المنتجات */}
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/product'} className='text-decoration-none text-black'>
            <div className="product">
              <img src={Image} alt="" className='img-fluid' />
              {checkIfBig ? <div className='offer px-4 py-1'>
                40% OFF
              </div> : <></>}
            </div>
            <h3 className='p-3'>Face mask</h3>
            {checkIfBig ? <p className='text-center'><del>$400</del> $250</p> : <></>}
          </Link>
        </SwiperSlide>
        


        {/* يمكنك إضافة المزيد من المنتجات هنا */}
      </Swiper>
    </Container>
  )
}

Product3Swiper.propTypes = {
  count: PropTypes.number, // تحديد أن `count` هو عدد
  checkIfBig: PropTypes.bool
};