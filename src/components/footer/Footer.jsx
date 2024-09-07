/* eslint-disable react/no-unescaped-entities */
import { Row } from 'react-bootstrap'
import './footer.css'


export default function Footer() {
  return (
    <div className='footer p-2 m-4 '>
      <Row>
        <div className="col-lg-4">
          <p className=' px-5 ms-5'>
            <a href="#" className='text-center  fs-1 text-decoration-none'> <span className='text-danger'>Macc</span> <br /> <span className='text-primary'>Essentials</span> </a>
          </p>
        </div>
        <div className="col-lg-2">
          <ul className=''>
            <li className='p-2'>Home</li>
            <li className='p-2'>Collection</li>
            <li className='p-2'>Products</li>
          </ul>
        </div>
        <div className="col-lg-2">
          <ul className=''>
            <li className='p-2'>About</li>
            <li className='p-2'>Contact</li>
            <li className='p-2'>FAQ</li>
          </ul>

        </div>
        <div className="col-lg-4">
          <p className='mb-4 pb-3'>Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p>
          <div className='input-box'>
            <input type="text" placeholder='enter your mail' className='mt-4 emailInput' />
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className='socialIcons my-4 d-flex'>
            <a href="https://x.com/" target='_blank' className='text-white text-decoration-none mx-2'>
              <i className="fa-brands fa-twitter d-flex align-items-center justify-content-center"></i>
            </a>
            <a href="https://linkedin.com" target='_blank' className='text-white text-decoration-none mx-2'>
              <i className="fa-brands fa-linkedin d-flex align-items-center justify-content-center"></i>
            </a>
            <a href="https://facebook.com/" target='_blank' className='text-white text-decoration-none mx-2'>
              <i className="fa-brands fa-facebook d-flex align-items-center justify-content-center"></i>
            </a>
            <a href="https://instagram.com/" target='_blank' className='text-white text-decoration-none mx-2'>
              <i className="fa-brands fa-instagram d-flex align-items-center justify-content-center"></i>
            </a>
            
          </div>
        </div>
      </Row>
      <p className='text-center'>All rights are reserved</p>
    </div>
  )
}
