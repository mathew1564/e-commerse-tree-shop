import React from "react";
import "./BottomBar.scss";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
export default function BottomBar() {
  return (
    <Container fuild className="bottom-bar d-none">
      <section className="item-bottom ">
        <div>
          <AiOutlineHeart />

          <div>Favorite</div>
        </div>
      </section>
      <section className="item-bottom ">
        <div>
          <AiOutlineShoppingCart />
          <div>Cart</div>
        </div>
      </section>
      <section className="item-bottom ">
        <div>
          <AiOutlineUser />
          <div>User</div>
        </div>
      </section>
    </Container>
  );
}
