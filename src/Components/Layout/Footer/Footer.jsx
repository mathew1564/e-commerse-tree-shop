import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer container ">
      <section className="ft-content row d-none d-lg-flex d-md-flex">
        <div className="col-lg-3 col-md-4 ft-content-child-1">
          <img
            src={require(`../../../assets/Layout_img/Logo_header.png`)}
            alt="logo"
            className="d-none d-lg-block d-md-block img-md"
          />

          <p className="sub-logo d-none d-lg-block d-md-block img-md">
            Create a green sanctuary with amazing plants, so that every day you
            can breathe in fresh air and enjoy inner peace and tranquility.
          </p>
        </div>
        <div className="col-lg-9 col-md-8 row ft-content-child-2">
          <div className="col-lg-3 col-md-3 ft-content-child-3">
            <ul>
              <li className="tilte-content">Shop Online</li>
              <li>
                <Link to="/shop/all/tree/bonsai">Plants</Link>
              </li>
              <li>
                <Link to="/shop/tool">Tools</Link>
              </li>
              <li>
                <Link to="/shop/fertilizer">Fertilize</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 ft-content-child-3">
            <ul>
              <li className="tilte-content">Services</li>
              <li>
                <Link to="/service/workshop">Terrarium workshop</Link>
              </li>
              <li>
                <Link to="/service/gift">Green Gifts</Link>
              </li>
              <li>
                <Link to="/service/decord">Green Decoration</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 ft-content-child-3">
            <ul>
              <li className="tilte-content">Resources</li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 ft-content-child-3">
            <ul>
              <li className="tilte-content">Customer support policy</li>
              <li>
                <Link>Terms</Link>
              </li>
              <li>
                <Link>Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="row ">
        <div className="col-lg-12 col-md-12 col-sm-12 ft-bottom">
          <span className="" style={{ color: "gray" }}>
            ©2023 PlantPalece. All rights reserved.
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
