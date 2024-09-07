import {  Container, Row } from "react-bootstrap"
import './checkOut.css'
import image from './image.png'
import { useNavigate } from "react-router-dom"



function CheckOut() {
  const navegator=useNavigate()
  return (
    <Container>
      <Row >
        <div className="col-lg-7 pe-5 d-flex flex-column justify-content-between align-items-start">
          <h2 className="fw-bold text-uppercase">checkout</h2>
          <p className="fw-bold">Delivery Address</p>
          <form action="">
            <Row className="gap-">
              <div className="col-lg-6">
                <input type="text" placeholder="John" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Wick" />
              </div>

              <div className="col-lg-12">
                <input type="text" placeholder="Street 32, Pasror road, Daska" />
              </div>
              <div className="col-lg-12">
                <input type="text" placeholder="N/A" />
              </div>

              <div className="col-lg-6">
                <input type="text" placeholder="51010" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Sialkot" />
              </div>

              <div className="col-lg-12">
                <input type="text" placeholder="+923445676890" />
              </div>
            </Row>
          </form>
          <div className="my-4 d-flex align-items-center justify-content-between w-100"> 
            <button className="btn d-flex align-items-center justify-content-between p-1">
              <i className="fa-solid fa-chevron-left mx-2"></i>
              <p className="p-0 m-0">Go back to cart</p>
            </button>
            <button className="btn btn-danger text-capitalize" onClick={() => navegator('/payment')}>
              save and continue
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <img src={image} alt="image" className="img-fluid" />
        </div>
      </Row>
    </Container>
  )
}

export default CheckOut