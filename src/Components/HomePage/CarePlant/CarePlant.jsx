import React ,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import care from "../../../assets/Layout_img/care.png";
import sunny from "../../../assets/Layout_img/sunny.png";
import water from "../../../assets/Layout_img/blood.png";
import ferte from "../../../assets/Layout_img/Group 14.png";
import "aos/dist/aos.css";
import AOS from "aos";
import "./CarePlant.scss";
export default function CarePlant() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="mt-5 care-plant ">
      <Row>
        <Col lg={6} data-aos="flip-right" data-aos-duration="2000">
          <div className="fs-1 fw-medium mb-3">
            How to care for <span className="green-title">plants</span>
          </div>
          <span>Take care of planst with all your heart</span>
          <div className="mt-3 contain-main">
            <img src={sunny} />
            <span className="fw-medium fs-5 ms-3 title-content">Adjust Lighting</span>
            <div className="ms-5 title-content">
              When caring for indoor plants, make sure the room temperature is
              neither too cold nor too hot
            </div>
          </div>
          <div className="mt-3 contain-main">
            <img src={water} />
            <span className="fw-medium fs-5 ms-3 title-content">Don't water too often</span>
            <div className="ms-5 title-content">
              Watering ornamental plants indoors does not have to be done every
              day
            </div>
          </div>
          <div className="mt-3 contain-main">
            <img src={ferte} />
            <span className="fw-medium fs-5 ms-3 title-content">Fertilize regularly</span>
            <div className="ms-5 title-content">
              The nutrients most indoor houseplants need are nitrogen for
              balance and potassium for stem strength
            </div>
          </div>
        </Col>

        <Col lg={6} className="mt-5" data-aos="flip-left" data-aos-duration="2000">
          <section className="container-img mb-5">
            <img src={care} alt="" className="care-img " />
{/* 
            <section className="group-button">
              <div className="button-plants button-item">Plants</div>
              <div className="button-tool button-item">Tools</div>

              <div className="button-plants button-item">Fertilize</div>
            </section> */}
          </section>
        </Col>
      </Row>
    </Container>
  );
}
