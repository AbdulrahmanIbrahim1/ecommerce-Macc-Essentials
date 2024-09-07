import { Row } from 'react-bootstrap'
import './landing.css'
import image from '../../images/image.png'

export default function Landing() {
  return (
    <Row className='land p-4 '>
      <div className="leftLand col-lg-6">
        <div className='textLeft'>
          
        <p className='bigText'>
          PROVIDING SERVICES AT YOUR DOOR
        </p>

        <p>
          <span className='fw-bold'>MACC Essentials </span>
          has an important role in making supplies and services available to customers and their patients during this critical time.
          This includes services from various domains. Our aim is to aid you. As much we can.
        </p>

          <button type="button" className="btn btn-danger">Learn more</button>

        </div>

      </div>
      {/*  */}
      <div className="rightLand col-lg-6">
        <div className="image">
          <img src={image} alt="image" className='img-fluid' />
        </div>
      </div>
    </Row>
  )
}
