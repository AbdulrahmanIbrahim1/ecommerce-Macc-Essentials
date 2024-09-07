/* eslint-disable react/no-unescaped-entities */
import {  Container, Modal, Row } from "react-bootstrap";
import { useState } from "react"; // استيراد useState لإدارة الحالة
import './payment.css'
import image from './image.png'
import popop from './popop.png'
import { useNavigate } from "react-router-dom";


function Payment() {
  // حالة لتتبع الراديو المختار
  const [selectedRadio, setSelectedRadio] = useState("option2");

  // معالج تغيير الراديو
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const [smShow, setSmShow] = useState(false);
  const navigate =useNavigate()

  return (
    <>
      <Modal
        size="md-down"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton className="p-0" >
          <Modal.Title id="example-modal-sizes-title-sm">
            <img src={popop} alt="" className="img-fluid"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h2>Order Placed Successfully</h2>
          <p className="my-4">Your Order Has Been Placed Successfull We'll Try To Ship It To Your Door Step As Soon We Can. Cheers</p>
          <button className="btn bg-blue my-3" onClick={() => navigate('/')}>CONTINUE SHOPPING</button>
        </Modal.Body>
      </Modal>


    <Container>

      <Row>
        <div className="col-lg-7 pe-5 d-flex flex-column justify-content-between align-items-start">
          <h2 className="fw-bold text-uppercase">payment</h2>
          <form action="" className="w-100">
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked={selectedRadio === "option0"} // تحديد الراديو المختار
                  onChange={handleRadioChange} // إضافة معالج onChange
                  />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Bitcoin
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked={selectedRadio === "option1"} // تحديد الراديو المختار
                  onChange={handleRadioChange} // إضافة معالج onChange
                  />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Apple Wallet
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked={selectedRadio === "option2"} // تحديد الراديو المختار
                  onChange={handleRadioChange} // إضافة معالج onChange
                  />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Paypal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked={selectedRadio === "option3"} // تحديد الراديو المختار
                  onChange={handleRadioChange} // إضافة معالج onChange
                  />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Debit / Credit Card
                </label>
              </div>
            </div>

            <p className="fw-bold">Delivery Address</p>

            <Row className="w-100">
              <div className="col-lg-12 p-0">
                <input type="text" placeholder="4568 8465 1258 6895" />
              </div>
              <div className="col-lg-12 p-0">
                <input type="text" placeholder="John Wick" />
              </div>

              <div className="col-lg-6 p-0">
                <input type="text" placeholder="12//24" />
              </div>
              <div className="col-lg-6 pe-0">
                <input type="text" placeholder="584" />
              </div>
            </Row>
          </form>
          <div className="my-4 d-flex align-items-center justify-content-between w-100">
            <button className="btn d-flex align-items-center justify-content-between p-1">
              <i className="fa-solid fa-chevron-left mx-2"></i>
              <p className="p-0 m-0">Go back to checkout</p>
            </button>
            <button
              className="btn btn-danger text-capitalize"
                onClick={() => setSmShow(true)}
              >
              PAy $ 40  
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <img src={image} alt="image" className="img-fluid" />
        </div>
      </Row>
    </Container>
              </>
  );
}

export default Payment;
