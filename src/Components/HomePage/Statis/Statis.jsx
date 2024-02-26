import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./Statis.scss";
import "aos/dist/aos.css";
import AOS from "aos";
function Statis() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mb-5 mt-4" >
      <div className="content-statis row ">
        <div className="col-12 d-flex  gap-5 statis-items ">
          <div className="statis-item">
            <span className="number">
              <CountUp start={0} end={1300} duration={2} /> +
            </span>
            <span>Deliveries</span>
          </div>
          <div className="statis-item">
            <span className="number">
              <CountUp start={0} end={1000} duration={2} /> +
            </span>
            <span>Customers</span>
          </div>
          <div className="statis-item">
            <span className="number">
              <CountUp start={0} end={300} duration={2} /> +
            </span>
            <span>Products</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statis;
