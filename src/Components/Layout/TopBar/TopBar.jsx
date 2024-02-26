import React, { useEffect, useState, useRef, useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './TopBar.scss'
import logo from '../../../assets/Layout_img/Logo_header.png'
import { TopNav } from '../../../Data/TopNav';
import { AllProduct, AllToolData, FertilizeData } from '../../../Data/AllProduct';
import { BsChevronDown } from "react-icons/bs";
import logoMb from '../../../assets/Layout_img/logo-mb.png'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenu, } from "react-icons/ai";
import ItemTopBar from './ItemTopBar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import BottomBar from './BottomBar';

import Login from '../../Authenticate/Login';
import { Toast } from 'primereact/toast';
import { Value } from '../../../Data/DataSava'
import Cookies from 'js-cookie';
import "aos/dist/aos.css";
import AOS from "aos";
export default function TopBar() {
 

  const nav = TopNav;
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchMb, setShowSearchMb] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu1, setShowMenu1] = useState(false);
  const [listShow, setListShow] = useState([])
  const [showLogin, setShowLogin] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [clickSearch, setClickSearch] = useState(false);
  const [valueInput,setValueInput]=useState()
  const InputRef = useRef();
  const InputRef2 = useRef();
  const InputRefMb = useRef();
  const toast = useRef(null);
  const isLogin = Cookies.get('isLogin');
  const { setIslogin } = useContext(Value)
  const { cart } = useContext(Value)
  
  const url = window.location.href;
  const domain = window.location.origin;
  
  const location = url.replace(domain, '');
 
  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: ' Sign in Success', detail: 'Enjoy your day', life: 1000 });
  }
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (InputRef.current && !InputRef.current.contains(e.target)) {
        setShowSearch(false)
      }
    }

    document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide)

    }

  }, [])
  useEffect(() => {
    const handleClickOutSideMb = (e) => {
      if (InputRefMb.current && !InputRefMb.current.contains(e.target)) {
        setShowSearchMb(false)
      }
    }

    document.addEventListener('click', handleClickOutSideMb);
    return () => {
      document.removeEventListener('click', handleClickOutSideMb)
    }

  }, [])
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (InputRef2.current && !InputRef2.current.contains(e.target)) {
        setValueInput('')
      }
    }

    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide)
    }

  }, [])
  const handleSetShow = (item) => {
    if (!isLogin) {
      setShowLogin(true)
    }
    else {
      setShowLogin(false)
    }
  }

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredProducts = [...AllProduct, ...AllToolData, ...FertilizeData].filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  const filteredProducts2 = [...AllProduct, ...AllToolData, ...FertilizeData].filter((product) => {
    if(valueInput) {

      return product.name.toLowerCase().includes(valueInput.toLowerCase());
    }
  });
  console.log(filteredProducts2);

  function onClickSearch() {
    setClickSearch(!clickSearch);
  }
  const limitWord=(item)=> {
    if(item.length>5) {
        const trimmedWord = item.substring(0,5);
        // const lastWhitespaceIndex = trimmedWord.lastIndexOf(' ');
        return trimmedWord+ ' ...';
    }
    return item;
}

  

  return (
    <>
      <Row className='m-0 p-0'>
        <Toast ref={toast} />
        <section className='top-bar  top-bar-md p-0 m-0'>
          <Container>

            <Row>

              <Col md={3} className='container-logo'>
                <Link to={'/'}>
                  <img src={logo} className='logo-header' />
                </Link>

              </Col>
              <Col md={7} className='d-flex justify-content-around align-items-center fw-bold fs-6'>
                {nav.map((item, index) => (
                  <section className='item'>
                    <Link to={item.link}>
                      <section id={item.id} className='item-nav d-inline-flex'>

                        {item.name}
                        {item.child && item.child.length ? (<BsChevronDown className='ms-1 mt-1 icon-down' />) : ''}
                        {item.child && item.child.length > 0 ? (
                          <section className='child1'  id={index} >

                            {item.child.map((childItem, index) => (
                              <section className='container-child'    >
                                <Link to={childItem.linkChild}>
                                  <div id={childItem.id} className='item-child'>

                                    {childItem.nameChild1}
                                  </div>
                                </Link>
                                {childItem.child && childItem.child.length > 0 ? (
                                  <section className='item-child2'>
                                    {childItem.child.map((itemChild2) => (
                                      <Link to={itemChild2.link}>
                                        <div className='item-child3'>
                                          {itemChild2.nameChild2}
                                        </div>
                                      </Link>
                                    ))}
                                  </section>
                                ) : ''}
                              </section>
                            ))}
                          </section>
                        ) : ''}

                      </section >
                    </Link>
                  </section>
                ))}
              </Col>
              <Col lg={2} className='d-flex align-items-center  fs-3 justify-content-around'>
                <section className='item-search' ref={InputRef}>
                  {/*  */}
                  <AiOutlineSearch className='item-icon icon' onClick={() => setShowSearch(true)} />
                  <Form.Control  placeholder='Search' className={`${showSearch ? '' : 'd-none'} search-input`}onChange={e=>handleChangeSearch(e)}>
                  </Form.Control>
                  <section className={`${showSearch ? 'd-block' : 'd-none'}  ${searchValue&&filteredProducts.length>0?'':'fit-content'} show-search`}>
                                    {searchValue&&filteredProducts.length>0?
                                      filteredProducts.map((item,index)=>(
                                        <section key={index}>
                                        <Link to={`${item.category==='tool'||item.category==='fertilizer'?`/shop/${item.category+'/'+item.id}`:`/shop/all/tree/${item.category+'/'+item.id}`}`}>
                                        <div>
                                          <img src={item.img[0].img1} className='img-search'/>
                                         <div className='d-inline fs-6 text-center'>
                                         {limitWord(item.name)}
                                         </div>
                                        </div>
                                        </Link>
                                           </section>
                                      )

                                      )
                                    :'Not found'}
                  </section>
                </section>
                {/* 





                */}
              <Link to={'wishlist'} className='d-flex'>

                <AiOutlineHeart className='item-icon icon'  />
              </Link>
                <div className='d-flex contain-icon'>
                  <Link to={"/cart"} className='d-flex'>
                  <div className='number-cart'>
                    {cart.length===0?'':cart.length}
                  </div>
                <AiOutlineShoppingCart className='item-icon icon' />
                  </Link>
                </div>
                <Link to={`${isLogin ? "/setting" : ''}`}>
                  <AiOutlineUser className='item-icon icon' onClick={() => handleSetShow(true)} />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>


        <section className='top-bar-sm p-0 d-flex justify-content-around align-items-center  d-lg-none' >
          <section className='p-0 m-0 container-wrapper'>
            <Row className={`${showMenu === true ? 'd-flex' : 'd-none'} layout menu-top p-0 m-0`}>
              <Col className='menu-content pb-5 ps-0 pe-0' xs={7} sm={5} md={5}>
                <Link to={'/'} className=' ' >

                  <img src={logo} alt="" className='logo-menu' />
                </Link>

                <section>
                  {nav.map((item) => (
                    <ItemTopBar url={location} setShowMenu={setShowMenu} item={item} />
                  ))}
                </section>

              </Col>
              <Col className='layout p-0' md={7} sm={7} xs={5} onClick={() => setShowMenu(false)}>


              </Col>
            </Row>
            <Row className='m-0'>
              <Col className='container-header p-0 m-0'>
                <section className='d-inline-block  show-menu ms-3  ' onClick={() => setShowMenu(true)}>

                  <AiOutlineMenu />

                </section>


                <InputGroup className={`${showMenu ? 'd-none' : 'input-search'}`}>
                  <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
                  <Form.Control  value={valueInput}  onChange={e=>setValueInput(e.target.value)} placeholder='Search' ></Form.Control>
                <section ref={InputRef2} className={`${valueInput&&valueInput.length>0 ? 'd-block fs-3 ' : 'd-none'}  ${valueInput&&filteredProducts2.length>0?'':'fit-content'} show-search`}>
                                    {filteredProducts2.length>0?
                                      filteredProducts2.map((item,index)=>(
                                        <section key={index}>
                                        <Link to={`${item.category==='tool'||item.category==='fertilizer'?`/shop/${item.category+'/'+item.id}`:`/shop/all/tree/${item.category+'/'+item.id}`}`}>
                                        <div>
                                          <img src={item.img[0].img1} className='img-search'/>
                                         <div className='d-inline fs-6 text-center'>
                                         {limitWord(item.name)}
                                         </div>
                                        </div>
                                        </Link>
                                           </section>
                                      )

                                      )
                                    :(<div className=''>
                                      Not found
                                    </div>)}
                  </section>
                </InputGroup>
                <div className='d-flex fs-2 function'>
                  <div ref={InputRefMb} className='d-flex'>

                    <section className='search-container'>
                    <AiOutlineSearch onClick={() => setShowSearchMb(true)} className='icon-search icon' />
                      
                    <Form.Control placeholder='Search' className={`${showSearchMb ? '' : 'd-none'} search-input`} />
                  
                    </section>
                  </div>
                  <Link to={'/wishlist'} className='d-flex'>

                  <AiOutlineHeart  className='icon'/>
                  </Link>
                  <div className='number-contain d-flex'>
                    <Link to={ "/cart"} className='d-flex'>
                      <div className='number-cart '>
                        {cart.length === 0 ? '' : cart.length}
                      </div>
                      <AiOutlineShoppingCart   className='icon' />
                    </Link>
                  </div>

                  <Link to={`${isLogin ? "/setting" : ''} `} className='d-flex'>
                    <AiOutlineUser className='item-icon icon' onClick={() => handleSetShow(true)} />
                  </Link>
                </div>
              </Col>

            </Row>
          </section>
        </section>
        <Login show={showLogin} setShow={setShowLogin} showSuccess={showSuccess} />
        <BottomBar />
      </Row>
    </>
  )
}
