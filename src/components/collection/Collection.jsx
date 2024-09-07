import { Row } from 'react-bootstrap';
import image from './image.png';
import './collection.css'
import { useState } from 'react';
import spray from './Body spray.png'
import vitaminC from './vitamin c.png'

export default function Collection() {
  const [clickPara, setClickPara] = useState('')
  const handleClickPara = (e) => {
    // setClickPara('')
    setClickPara(e)
  }
  return (
    <>
      <div className="collectionLand mb-3">
        <img src={image} alt="image landing" className="img-fluid" />
      </div>
      <Row className="collectionSection2 p-3">
        <div className="col-lg-3">
          {/* استخدام defaultValue لتحديد الخيار الافتراضي */}
          <select
            className="form-select form-select-lg mb-3 form-select-left"
            aria-label="Large select example"
            defaultValue=""
          >
            <option value="" disabled>
              COMPANY
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-lg mb-3 form-select-left"
            aria-label="Large select example"
            defaultValue=""
          >
            <option value="" disabled>
              PRICE
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-lg mb-3 form-select-left"
            aria-label="Large select example"
            defaultValue=""
          >
            <option value="" disabled>
              CATEGORIES
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>


        </div>
        {/*  */}
        <div className="col-lg-9">

          <div className='fourBoxs d-flex justify-content-between px-4 my-4 '>
            <p className={`mx-3 ${clickPara == "1" ? "clicked" : " "}`} onClick={() => handleClickPara('1')}>Everyday Essentials</p>
            <p className={`mx-3 ${clickPara == "2" ? "clicked" : " "}`} onClick={() => handleClickPara('2')}>Cleaning Essentials</p>
            <p className={`mx-3 ${clickPara == "3" ? "clicked" : " "}`} onClick={() => handleClickPara('3')}>Immunity & Health</p>
            <p className={`mx-3 ${clickPara == "4" ? "clicked" : " "}`} onClick={() => handleClickPara('4')}>Vitamin Supplements </p>
          </div>

          <div className='p-4 my-4 d-flex justify-content-between'>
            <p className='mx-3'>40 Products</p>
            <select className="form-select form-select-sm form-select-sort mx-3" aria-label="Small select example" defaultValue="">
              <option value="" disabled>
                Sort
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <Row className='mx-4'>

            <div className="col-lg-4">
              <div className="product">
                <img src={spray} alt="image" className='img-fluid' />
                <div className='offer px-4 py-1'>
                  40% OFF
                </div>
              </div>
              <h3 className='p-3'>Body Spray</h3>
              <p className='text-center'><del>$400</del> $250</p>
            </div>

            <div className="col-lg-4">
              <div className="product">
                <img src={vitaminC} alt="image" className='img-fluid' />
                <div className='offer px-4 py-1'>
                  40% OFF
                </div>
              </div>
              <h3 className='p-3'>Vitamin C</h3>
              <p className='text-center'><del>$400</del> $250</p>
            </div>
            <div className="col-lg-4">
              <div className="product">
                <img src={spray} alt="image" className='img-fluid' />
                <div className='offer px-4 py-1'>
                  40% OFF
                </div>
              </div>
              <h3 className='p-3'>Body Spray</h3>
              <p className='text-center'><del>$400</del> $250</p>
            </div>

            <div className="col-lg-4">
              <div className="product">
                <img src={vitaminC} alt="image" className='img-fluid' />
                <div className='offer px-4 py-1'>
                  40% OFF
                </div>
              </div>
              <h3 className='p-3'>Vitamin C</h3>
              <p className='text-center'><del>$400</del> $250</p>
            </div>
            <div className="col-lg-4">
              <div className="product">
                <img src={spray} alt="image" className='img-fluid' />
                <div className='offer px-4 py-1'>
                  40% OFF
                </div>
              </div>
              <h3 className='p-3'>Body Spray</h3>
              <p className='text-center'><del>$400</del> $250</p>
            </div>

            <div className="col-lg-4">
              <div className="product">
                <img src={vitaminC} alt="image" className='img-fluid' />
                <div className='offer px-4 py-1'>
                  40% OFF
                </div>
              </div>
              <h3 className='p-3'>Vitamin C</h3>
              <p className='text-center'><del>$400</del> $250</p>
            </div>

            <div className="pages123 col-lg-12 d-flex justify-content-center align-items-center">
              <button className='btn mx-1'>1</button>
              <button className='btn mx-1'>2</button>
              <button className='btn mx-1 next'> <i className="fa-solid fa-chevron-right"></i></button>
            </div>

          </Row>


        </div>
      </Row>
    </>
  );
}
