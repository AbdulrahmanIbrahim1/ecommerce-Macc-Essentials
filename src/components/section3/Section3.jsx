import { Row } from 'react-bootstrap'
import './section3.css'
import image from './image.png'
import Product3Swiper from '../product3Swiper/Product3Swiper'

import PropTypes from 'prop-types';


export default function Section3({directionLeft=true }) {
  return (
    <Row className={`section3 my-3  ${directionLeft ? ' ' : 'flex-row-reverse'}`}>
      <div className=" img-fluid col-lg-4">
        <div className='full-image'>
        <img src={image} alt="" className='img-fluid' />
        </div>
      </div>
      {/*  */}
      <div className="col-lg-8 p-3">
        <div className='title d-flex justify-content-evenly align-items-center'>
          <h2 className=''><span>MACC</span> WEEKLY DISCOUNT</h2>
          <button type="button" className="btn btn-secondary">View all</button>
        </div>
        <div className='p-3'>
        <Product3Swiper count={2} checkIfBig={true} />
        </div>
      </div>
    </Row>
  )
}

Section3.propTypes ={
  directionLeft: PropTypes.bool
}