import React, { useState ,useEffect} from "react";
import "./NewProducts.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import CardProductNew from "./CardProductNew/CardProductNew";
import { AllProduct } from "../../../Data/AllProduct";
import "aos/dist/aos.css";
import AOS from "aos";
function NewProduct() {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1187px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const filteredProducts = AllProduct.filter((item) => item.tag === "new");

  const productTemplate = (product) => (
    <div className="card-item">
      <Row>
        <Col >
          <CardProductNew item={product}/>
        </Col>
      </Row>
    </div>
  );

  return (
    <section className="new-product">
      <div className="container">
        <div className="title-product row">
          <div className="title-name col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
            New Products
          </div>
          <div className="btn-category col-lg-6 col-md-6 col-sm-12">
            <button className="btn-choose">Choose:</button>
            <Link to="/shop/all">
              <button className="btn btn-c btn-color-1">Plants</button>
            </Link>
            <Link to="/shop/tool">
              <button className="btn btn-c btn-color-2">Tools</button>
            </Link>
            <Link to="/shop/fertilizer">
              <button className="btn btn-c btn-color-3">Fertilize</button>
            </Link>
          </div>
        </div>
        <div>
          <Carousel
          data-aos='fade'
            value={filteredProducts}
            numScroll={1}
            numVisible={4}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
        <div className="btn-conteiner mt-4" >
          <Link to="/shop/all" className="btn-content btn text-light" >
            <span className="btn-title ">All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewProduct;
