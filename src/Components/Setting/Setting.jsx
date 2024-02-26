import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'

import { AiOutlineBell, AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import './Setting.scss'
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Value } from '../../Data/DataSava';
import LoginSetting from '../Authenticate/LoginSetting';
export default function Setting() {
    document.title = 'Setting'

    const navigate=useNavigate();
    const [option, setOption] = useState('infor');
    const [editFullName, setEditFullName] = useState(false)
    const [editPassword, setEditPassword] = useState(false);
    const [editPhone, setEditPhone] = useState(false)
    const [password, setPassword] = useState('*********');
    const [phone, setPhone] = useState('0123456789');
    const [editName, setEditName] = useState()
    const [name, setName] = useState()
    const [fullName,setFullName]=useState('User')
    const [lessonCheck, setLessonCheck] = useState(true);
    const [feedbackCheck, setFeedBackCheck] = useState(true);
    const [activiesCheck, setActiviesCheck] = useState(true)
    const {setIslogin}=useContext(Value);
    const {isLogin}=useContext(Value);

    
    const logout = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove('isLogin')
                // window.location.reload();
                setIslogin(false)
             
        navigate('/')
               
            }
        })
  
    }
    
    return (
       
        <Container className='setting'>
            <Row>
                <Col lg={3} className='mb-5'>
                    <div className='fs-2 fw-bold'>

                        Setting
                    </div>
                    <section onClick={() => setOption('infor')} className={`${option === 'infor' ? 'setting-options-check' : ''} setting-options mt-3`}>
                        <AiOutlineUserAdd className='setting-icon fs-4 me-3 ms-3' />

                        Setting Infor
                    </section>
                    <section onClick={() => setOption('noti')} className={`${option === 'noti' ? 'setting-options-check' : ''} setting-options mt-3`}>
                        <AiOutlineBell className='setting-icon fs-4 me-3 ms-3' />
                        Setting notifications
                    </section>
                    <section className='d-flex justify-content-center mt-5'   >
                       <Button variant='danger ps-5 pe-5' onClick={logout}  >LOG OUT</Button>
                    </section>
                </Col>
                <Col lg={9}>
                    {option === 'infor' ? (
                        <section >

                            <div className='fs-4 fw-bold item-title'>

                                Information
                            </div>
                            <section className='mt-4 pb-5 setting-item'>
                                <div className='fw-bold'>
                                    Full Name
                                </div>
                                <div className='mt-2'>
                                    <div className={`${editName ? 'd-inline-block ' : 'd-none'} `}>

                                        <input className='form-control input-setting d-inline-block' type="" name="" value={name} onChange={e => setName(e.target.value)} />
                                        <span className='p-2 fs-5 text-danger' onClick={() => setEditName(false)}>X</span>
                                    </div>
                                    <div className={`${editName ? ' d-none' : 'd-inline-block'}`}>
                                      User
                                    </div>

                                    <Button className='setting-button' onClick={() => setEditName(true)}>Edit</Button>
                                </div>
                            </section>

                            <section className='mt-4 pb-5 setting-item'>
                                <div className='fw-bold'>
                                    Avatar
                                </div>
                                <div className='mt-2'>
                                    <div className={`${editFullName ? 'd-inline-block ' : 'd-none'} `}>


                                    </div>
                                    <div className='d-inline-block' >
                                        Should be  a square image, accepting files:  JGP, PNG or GIF
                                    </div>

                                    <input type="file" name="" value="" className='setting-upload' />
                                </div>
                            </section>

                            <section className='mt-4 pb-5 setting-item'>
                                <div className='fw-bold'>
                                    Email
                                </div>
                                <div className='mt-2'>
                                    <div className={`${editFullName ? 'd-inline-block ' : 'd-none'} `}>

                                        <input className='form-control input-setting d-inline-block' type="" name="" value={fullName} onChange={e => setFullName(e.target.value)} />
                                        <span className='p-2 fs-5 text-danger' onClick={() => setEditFullName(false)}>X</span>
                                    </div>
                                    <div className={`${editFullName ? ' d-none' : 'd-inline-block'}`}>
                                        {fullName}
                                    </div>

                                    <Button className='setting-button' onClick={() => setEditFullName(true)}>Edit</Button>
                                </div>
                            </section>
                            <section className='mt-4 pb-5 setting-item'>
                                <div className='fw-bold'>
                                    Password
                                </div>
                                <div className='mt-2'>
                                    <div className={`${editPassword ? 'd-inline-block ' : 'd-none'} `}>

                                        <input className='form-control input-setting d-inline-block' type="" name="" value={password} onChange={e => setPassword(e.target.value)} />
                                        <span className='p-2 fs-5 text-danger' onClick={() => setEditPassword(false)}>X</span>
                                    </div>
                                    <div className={`${editPassword ? ' d-none' : 'd-inline-block'}`}>
                                        {password}
                                    </div>

                                    <Button className='setting-button' onClick={() => setEditPassword(true)}>Edit</Button>
                                </div>
                            </section>
                            <section className='mt-4 pb-5 setting-item'>
                                <div className='fw-bold'>
                                    Phone
                                </div>
                                <div className='mt-2'>
                                    <div className={`${editPhone ? 'd-inline-block ' : 'd-none'} `}>

                                        <input className='form-control input-setting d-inline-block' type="" name="" value={phone} onChange={e => setPhone(e.target.value)} />
                                        <span className='p-2 fs-5 text-danger' onClick={() => setEditPhone(false)}>X</span>
                                    </div>
                                    <div className={`${editPhone ? ' d-none' : 'd-inline-block'}`}>
                                        {phone}
                                    </div>

                                    <Button className='setting-button' onClick={() => setEditPhone(true)}>Edit</Button>
                                </div>
                            </section>

                        </section>

                    ) :
                        (
                            <section>
                                <div className='fs-4 fw-bold item-title'>

                                    Notifications
                                </div>
                                <div className='mt-3'>
                                    Notify me when:
                                </div>
                                <section className='mt-4 pb-5 setting-item'>
                                    <div className='d-inline-block'>
                                        New product
                                    </div>
                                    <Form className='d-inline-block float-end  switch-setting'>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            onChange={e => setLessonCheck(!lessonCheck)}
                                            checked={lessonCheck ? true : false}
                                        />
                                    </Form>
                                </section>
                                <section className='mt-4 pb-5 setting-item'>
                                    <div className='d-inline-block'>
                                        New activities
                                    </div>
                                    <Form className='d-inline-block float-end  switch-setting'>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            onChange={e => setActiviesCheck(!activiesCheck)}
                                            checked={activiesCheck ? true : false}
                                        />
                                    </Form>
                                </section>
                                <section className='mt-4 pb-5 setting-item'>
                                    <div className='d-inline-block'>
                                        When receving Feedback 
                                    </div>
                                    <Form className='d-inline-block float-end  switch-setting'>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            onChange={e => setFeedBackCheck(!feedbackCheck)}
                                            checked={feedbackCheck ? true : false}

                                        />
                                    </Form>
                                </section>
                            </section>

                        )}


                </Col>
            </Row>
        </Container>
    )
}
