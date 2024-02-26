import React, { useContext, useState, useRef } from "react";
import "./CartItem.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Value } from "../../Data/DataSava";
import { FaTrashAlt } from "react-icons/fa";

export default function CartItem({ item, show }) {
  console.log(item);
  const { cart } = useContext(Value);
  const { setCart } = useContext(Value);

  const [number, setNumber] = useState(1);
  
  const handleChange = (e) => {
    const value = e.target.value;

    const sanitizedValue = value.replace(/[^0-9]/g, "");
    if (parseInt(sanitizedValue) / 1 === parseInt(sanitizedValue)) {
      if (parseInt(sanitizedValue) >= 0) {
        setNumber(parseInt(sanitizedValue));
      }
    } else {
      setNumber(sanitizedValue);
    }
  };
  const handleRemove = () => {
    const arr = cart;
    setCart(arr.filter((items) => items.id !== item.id));
    show();
  };
    const handleNumberChange=(op)=> {
      if(op==='add') {
        setNumber(number+1)
      }
      else if(op==='sub') {
        if(number>1) {
          setNumber(number-1)
        }
        
      }
    }
  return (
    <Row className="cart-item mb-3 w-100 justify-content-center">
      <Col lg={2} md={2} sm={3}>
        <img src={item.img[0].img1} alt="" className="cart-img w-100" />
      </Col>
      <Col lg={2} md={2} className="">
        
          <div className="name-product">
            <div className=" title-name fw-bold ">{item.name}</div>
            <div className="mt-1 text-category">
              <span className=" fw-medium "> Category:</span>{" "}
              <span className="text"> {item.category}</span>
            </div>
            <div className="">
              {item.origin ? (
                <span className="origin-content me-3 fw-medium">
                  Origin: {item.origin}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
      </Col>
      <Col lg={8} md={8} sm={9} className="">
        <section className="item-shopping">
          <div className="mb-3 mt-3 quantity">
            <div className="">
              <button
                className="item-number "
                onClick={() =>handleNumberChange('sub')}
              >
                <BsDashLg />
              </button>
              <button
                className="d-inline number-number "
                type="number"
                accept="number"
                name=""
                value={number}
                onChange={(e) => handleChange(e)}
              >
                {" "}
                {number}
              </button>
              <button
                className="item-number  "
                onClick={() => handleNumberChange('add')}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="mt-2  mb-3 fs-4   ">
            <div className="total-text d-flex align-items-center">
              <span className="">Total:</span>{" "}
              <span className="text-danger"> {item.price * number} $</span>
            </div>
          </div>
          <Link to={`/shop/all/${item.id}`}>
            <span className="  text-primary view">View detail</span>
          </Link>
          <Button
            variant="button-remove"
            className="ms-2"
            onClick={() => handleRemove()}
          >
            <FaTrashAlt />
          </Button>
        </section>
      </Col>
    </Row>
  );
}
