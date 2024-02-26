
import "./ServiceDetail.scss";
import React, { useEffect } from "react";
import { services2 } from "../../Data/Service";
import { Container } from "react-bootstrap";
import "aos/dist/aos.css";
import AOS from "aos";
import { BsPhoneVibrate } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BreadCrumb } from 'primereact/breadcrumb'
function ServiceDetail2() {
  document.title = 'Gifts'
  const items = [{ label: "Service", url: "/service" },{ label: "Service gift", url: "/service/gift" }];
  const home = { icon: <AiOutlineHome />, url: "/" };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {services2.map((item, idx) => (
        <div key={idx}>
          <img src={item.banner} alt="" className="w-100 img-banner" />
          <Container className="service-detail-main ">
          <BreadCrumb model={items} home={home} className="mt-3 mb-5" />
            <div className="row ">
              <div className="col-lg-6 col-md-12 col-sm-12 content-main ">
                <p className="title-name" data-aos="fade-up">
                  {item.name}
                </p>
                <p data-aos="fade-right">{item.content1}</p>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 img-content-wrap text-center"
                data-aos="fade"
                data-aos-duration="1000"
              >
                <img src={item.img1} alt="" className="w-100 img-content " />
                <i>{item.sub1}</i>
              </div>
            </div>
            <div className="row mt-5 mb-5 ">
              <div
                className="col-lg-6 col-md-12 col-sm-12 img-content-wrap text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={item.img2} alt="" className="w-100 img-content " />
                <i>{item.sub2}</i>
              </div>
              <div
                className="col-lg-6 col-md-12 col-sm-12 content-main "
                data-aos="fade"
                data-aos-duration="1000"
              >
                <p>{item.content2}</p>
              </div>
            </div>
            {/* implementation process */}

            {/* From contact */}
          </Container>
          <div className="form-img-main">
            <img
              src={require(`../ServicePage/imgService/bg_form.jpg`)}
              alt=""
              className="w-100 img-form"
            />
            <div className="container form-contact-left">
              <div className="row form-contact">
                <div className="col-lg-5 col-md-12 col-sm-12 content-left ">
                  <h3 className="title-contact">
                    Contact for consultation, quote
                  </h3>
                  <p>
                    <Link to ='tel:012345678'> 
                      <BsPhoneVibrate />

                      <span> 012345678</span>
                    </Link>
                  </p>
                  <p>
                    <Link to='mailTo:aptechhcm@gmail.com'>
                      <CiMail /> <span>aptechhcm@gmail.com</span>
                    </Link>
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 input-form mt-5  ">
                  <input
                    type="text"
                    placeholder="FullName *"
                    className="form-control form-info"
                  />
                  <input
                    type="text"
                    placeholder="Email *"
                    className="form-control form-info"
                  />
                  <input
                    type="text"
                    placeholder="Company *"
                    className="form-control form-info"
                  />
                  <input
                    type="text"
                    placeholder="Phone*"
                    className="form-control form-info"
                  />
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="form-control form-info form-textarea"
                    placeholder="Detailed requirements (quantity, color, product, ..) *"
                  ></textarea>
                  <div className="btn-conteiner ">
                    <Link className="btn-content btn text-light">
                      <span className="btn-title">Send</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ServiceDetail2;
