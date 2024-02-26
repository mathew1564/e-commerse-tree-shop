import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './TopBar.scss'
import logo from '../../../assets/Layout_img/Logo_header.png'
import { TopNav } from '../../../Data/TopNav';
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenuUnfold, } from "react-icons/ai";
import ItemTopBar2 from './ItemTopBar2';
import { Link } from 'react-router-dom';

export default function ItemTopBar({url, item ,setShowMenu}) {
  const [showMenu1, setShowMenu1] = useState(false);
  const handleOnclick = () => {
        if(item.link) {
         setShowMenu(false)
        }
  }
  return (
    <section className={`${url===item.link?'active' :''}`} key={item.id}>
      <Link to={item.link} onClick={() => handleOnclick()}>

        <div className='item-menu' onClick={() => setShowMenu1(!showMenu1)}>
          {item.icon}
          <span className='ms-2'> {item.name}</span>
          {item.child && item.child.length > 0 ? (<BsChevronDown className='ms-1' />) : ''}
        </div>
      </Link>
      {item.child && item.child.length > 0 ? (
        <section className={`container-child1 ${showMenu1 ? 'd-block' : 'd-none'}`}>
          {item.child.map((child1) => (
            <ItemTopBar2 url={url} key={child1.id} child1={child1} setShowMenu={setShowMenu} />

          ))}
        </section>
      ) : ''}

    </section>
  )
}
