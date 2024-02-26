import React, { useContext, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { AllProduct } from "../../Data/AllProduct";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { Toast } from "primereact/toast";
import { Value } from "../../Data/DataSava";
import imgCard from "../../assets/Layout_img/AddToCard.png";
export default function Cart() {
  const { cart } = useContext(Value);
  const { setCart } = useContext(Value);
  document.title = 'Cart'

  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Removed success",
      detail: "The product was removed",
      life: 1000,
    });
  };
  const showSuccessCheckOut = () => {
    toast.current.show({
      severity: "success",
      summary: "Check Out success",
      detail: "The products were checked out",
      life: 1000,
    });
  };
  const handleCheckOut = () => {
    setCart([]);
    showSuccessCheckOut();
  };
  return (
    <div>
      <Toast ref={toast} />

      {cart.length > 0 ? (
        <Container  className="cart ">
          <h2 className="mt-5 mb-5">Shopping Cart</h2>
          <Row>
            <Col lg={8} md={9} xs={12}>
              {cart.map((item, index) => (
                <CartItem item={item} show={showSuccess} />
              ))}
            </Col>

            <Col
              lg={4}
              md={3}
              xs={12}
              className="fs-2 checkout  "
            >
              <div className="form-control">
                <h3 style={{ color: "gray" }}>Summary</h3>
                <hr />
                <div className="d-flex mt-4 total-money">
                  <p>Products:</p>
                  <p>$ 80.00</p>
                </div>
                <div className="d-flex mt-1 total-money">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="d-flex mt-1 total-money">
                  <p>Order Total:</p>
                  <b>$ 80.00</b>
                </div>

                <Button
                  variant="warning"
                  className="checkoutbutton w-100"
                  onClick={() => handleCheckOut()}
                >
                  Check out{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container
          fuild
          className=" text-center d-flex justify-content-center nothing"
        >
          <Row className="">
            <img src={imgCard} className="img" />
            <Link to="/shop/all">
              <div>Nothing in your cart</div>
              <div className="link fs-3">Add somes</div>{" "}
            </Link>

            <div></div>
          </Row>
        </Container>
      )}
    </div>
  );
}
