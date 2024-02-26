import React, {useEffect} from "react";
import leftimg from "../../../assets/Layout_img/service 1.png";
import pic3 from "../../../assets/Layout_img/image_11-removebg-preview.png";
import pic2 from "../../../assets/Layout_img/image_10-removebg-preview (1).png";
import pic1 from "../../../assets/Layout_img/image_9-removebg-preview.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Service.scss";
export default function Service() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="service mb-5 ">
      <Container className="contain pt-5 pb-5">
        <Row>
          <Col lg={4} className="">
            <img src={leftimg} alt="" className="img-service"  data-aos="fade" data-aos-duration="1000"/>
          </Col>
          <Col lg={8} className="content">
            <div>
              <div className="title1 fw-medium fs-3">Open To Nature</div>
              <div className="text1">
                “ PlantPalace always pioneering to bring a green environment" to
                everyone. Contributing to making life easier - fresher than
                flowers - more in harmony with the environment.”
              </div>
            </div>
            <Row>
              <Col lg={4} className="text-center">
                <Link to='/service/workshop' className="link-hover" data-aos="fade" data-aos-duration="1000">
                  <img src={pic1} className="mb-3" />
                  <div className="title2 mb-3">TERRARIUM WORKSHOP</div>
                  <div className="text2">
                    Are you looking for nature-based activities to enhance your
                    experience or to reconnect with yourself after the hustle
                    and bustle of daily life?
                  </div>
                </Link>
              </Col>
              <Col lg={4} className="text-center">
                <Link to='/service/gift' className="link-hover" data-aos="fade" data-aos-duration="2000">
                  <img src={pic2} className="mb-3" />

                  <div className="title2 mb-3 ">GREEN GIFTS </div>
                  <div className="text2">
                    Creative green gifts are waiting for you to present to your
                    loved ones, dear ones, and valued partners on special
                    occasions.
                  </div>
                </Link>
              </Col>

              <Col lg={4} className="text-center">
                <Link to='/service/decord' className="link-hover" data-aos="fade" data-aos-duration="300">
                  <img src={pic3} className="mb-3" />
                  <div className="title2 mb-3"> GREEN DECORATION</div>
                  <div className="text2">
                    A small corner in your house lacks greenery? Lacks vitality?
                    Don't have time? PlantPalace take care of it for you!
                  </div>
                </Link>
              </Col>
            </Row>
            <Link to="/service">
              <div className="mt-5 button-service d-inline-block">
                Show all services
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
