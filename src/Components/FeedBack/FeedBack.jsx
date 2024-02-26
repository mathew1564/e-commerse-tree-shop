import React ,{useState,useEffect} from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import feedback from "./imgFedd/feedback.png";
import "./FeedBack.scss";
import Swal from 'sweetalert2';
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
export default function FeedBack() {
  useEffect(() => {
    AOS.init();
  }, []);
  const location = useLocation();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleSubmit = () => {

    setIsSubmitSuccess(true);

 
    Swal.fire({
      icon: 'success',
      title: 'Send success',
      text: 'Thank you for feedback!',
    })
  };
  document.title = 'Feedback'
  return (
    <div className="container">
      <Row className="feed-back-main">
        <Col
          sm={12}
          md={5}
          lg={5}
          className="mb-4 col-feedback d-flex align-items-center"
        >
          <img className="img-feedback w-100" src={feedback}  data-aos="flip-left" data-aos-duration="3000"/>
        </Col>
        <Col
          sm={12}
          md={7}
          lg={7}
          className=" mb-4 d-flex justify-content-center col-feedback "
        >
          <Card className="card-feedback  m-2">
            <Card.Body className="card-feeback-body">
              <Card.Title className="text-center fw-bold title-feedback">
                <span>FeedBack Form</span>
              </Card.Title>
              <Form>
                <Form.Group className="mt-3">
                  <Form.Label className="fw-bold">Phone :</Form.Label>
                  <Form.Control placeholder="01234567 *"/>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label className="fw-bold">Email:</Form.Label>
                  <Form.Control placeholder="a@gmail.com" />
                </Form.Group>
              </Form>
              <Form.Group className="mt-3">
                <Form.Label className="fw-bold">Message :</Form.Label>
                <Form.Control as={"textarea"} rows={10} placeholder="" />
              </Form.Group>
        
              <div className=" text-center d-flex justify-content-center mt-3">
                <button onClick={handleSubmit} className="button-1">
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
         
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
