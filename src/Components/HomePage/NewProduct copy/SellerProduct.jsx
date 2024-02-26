import React, { useState,useEffect } from "react";
import "./SellerProduct.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import { AllProduct } from "../../../Data/AllProduct";
import { CardProduct } from "../../Layout/Products/ProductDetails/CardProduct/CardProduct";
import CardProductNew from "../NewProduct/CardProductNew/CardProductNew";
import "aos/dist/aos.css";
import AOS from "aos";
function SellerProduct() {
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

  const filteredProducts = AllProduct.filter((item) => item.tag === "best seller");

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
            Best Seller Products
          </div>
         
        </div>
        <div>
          <Carousel
            value={filteredProducts}
            numScroll={1}
            numVisible={4}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
        <div className="btn-conteiner mt-4">
          <Link to="/shop/all" className="btn-content btn text-light">
            <span className="btn-title">All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SellerProduct;
