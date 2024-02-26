import React, { useState ,useRef, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Login.scss'
import login from '../../assets/Layout_img/login.png'
import { Container, Form, Col, Row } from 'react-bootstrap'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import Cookies from 'js-cookie';

        
export default function LoginSetting({ show, setShow,showSuccess }) {
    const [userName, setUserName] = useState();
    const [passWord, setPassword] = useState();
    const [showPass, setShowPass] = useState(false);
    const [validated, setValidated] = useState(false);
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        if(form.checkValidity() === true) {
            setShow(false);
            showSuccess();
            let obj={isLogin:true,userName:userName};
            Cookies.set('isLogin', JSON.stringify(obj),{expires:expiryDate})
        }
        setValidated(true);
    };
    return (

        <Container className='login'
            show={show}
            onHide={() => setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div closeButton className=''>
                <section className='title-login text-center'>
                    LOGIN TO CONTINUE
                </section>
            </div>
            <section>


                <Container>
               
                    <Row className='mb-4'>
                        <Col lg={6}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} >

                                <Form.Group className='mt-3'>
                                    <Form.Label className='label'>User Name</Form.Label>
                                    <Form.Control required value={userName} onChange={e => setUserName(e.target.value)} className='text' placeholder='Username' />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a username.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mt-3 password'>
                                    <Form.Label className='label'>Password</Form.Label>
                                    <Form.Control required value={passWord} onChange={e => setPassword(e.target.value)} type={`${showPass ? 'text' : 'password'}`} placeholder='Password' />
                                    <AiFillEye className={`${showPass ? 'd-none' : 'd-block'} eye`} onClick={() => setShowPass(true)} />
                                    <AiFillEyeInvisible className={`${showPass ? 'd-block' : 'd-none'} eye`} onClick={() => setShowPass(false)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a password
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <section className='d-flex justify-content-between'>
                                    <Form.Group className='mt-3 d-inline'>
                                        <Form.Check className='d-inline me-2' />
                                        <span> Remember me</span>
                                    </Form.Group>
                                    <span className='forgot mt-3 '>For got pasword</span>
                                </section>
                                <div className='d-flex justify-content-center'>
                                    <Button type='submit' variant="success" className='mt-4 signin'>SIGN IN</Button>
                                </div>
                            </Form>
                            <div className='mt-3 mb-3'>
                                Or login with :
                            </div>
                            <BsFacebook className='me-5 fs-1 icon-face' />
                            <BsGoogle className=' fs-1 icon-gg' />
                        </Col>
                        <Col lg={6}>
                            <img src={login} className='login-img' />
                        </Col>

                    </Row>
                </Container>




            </section>

        </Container>


    )
}
