/* eslint-disable react/no-unescaped-entities */
import { Container, Row } from "react-bootstrap";
import img from './colorex.png'
import './product.css'
import Product3Swiper from "../product3Swiper/Product3Swiper";
import { Link } from "react-router-dom";
import { useState } from "react";



export default function Product() {
  const [messageAdd, setMessageAdd] = useState(false)
  return (
    <>
      {messageAdd ? <div className="addedMessage position-relative" >
        <p className="addedToCart">successfuly added to cart. <Link to={'cart'}>Check now</Link> </p>
        <i className="fa-regular fa-circle-xmark" onClick={()=>setMessageAdd(false)}></i>
      </div>:<></>}
      <Container>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        {/*  */}
        <Row>

          <div className="col-lg-2 d-flex justify-content-center flex-column align-items-center">
            <div className="smallImage my-1">
              <img src={img} alt="product img" className="img-fluid" />
            </div>
            <div className="smallImage my-1">
              <img src={img} alt="product img" className="img-fluid" />
            </div>
            <div className="smallImage my-1">
              <img src={img} alt="product img" className="img-fluid" />
            </div>
            <div className="smallImage my-1">
              <img src={img} alt="product img" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="bigImage">
              <img src={img} alt="product img" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-5">

            <div className="d-flex justify-content-between">
              <h2 className="fw-bold">COLOROX  WIPES  </h2>
              <i className="fa-regular fa-heart fs-2"></i>
            </div>
            <h3 className="text-danger">$ 40.00</h3>

            <div className="colors my-3">
              <button className="btn me-2">Balck</button>
              <button className="btn mx-2">Gold</button>
              <button className="btn mx-2">Apollo</button>
            </div>
            <button className="btn btn-blue my-2" onClick={()=>{
              setMessageAdd(true)
              console.log(messageAdd);
              
            }}> add to cart</button>

            <p className="my-3">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui,
              a porta ante lectus dapibus est. Aliquam a bibendum mi,
              condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, </p>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    DESCRIPTION
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    RETURN POLICY
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    CITIZEN POLICY
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>

          </div>
        </Row>
        <h2 className="my-4 pt-4 text-center">YOU MAY ALSO LIKE</h2>
        <div className="my-4">
          <Product3Swiper />
        </div>
      </Container>
    </>
  )
}
