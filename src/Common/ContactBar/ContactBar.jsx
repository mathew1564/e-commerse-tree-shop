import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactBar.scss";
import "aos/dist/aos.css";
import AOS from "aos";
// icon
import {ImLocation2} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {FaShoppingBag} from 'react-icons/fa'
function ContactBar() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [social, setSocial] = useState();
  const soccial = [
    { icon: "3.png", content: "Facebook", link:'https://www.facebook.com/aptechvietnam.com.vn' ,linkT:'https://www.facebook.com/aptechvietnam.com.vn'},
    { icon: "1.png", content: "Address", link:'https://goo.gl/maps/ZpQNC6EVQjhebJzH7',linkT:'https://goo.gl/maps/ZpQNC6EVQjhebJzH7' },
    { icon: "2.png", content: "  012345678 ", link: "tel:012345678" },
    { icon: "4.png", content: "Feedback ", link: "/feedback" },
  ];
  const soccialmb = [
    { icon: <FaShoppingBag/>, content: "Shop", link:'/shop/all' },
    { icon: <BsFacebook/>, content: "Facebook", link:'https://www.facebook.com/aptechvietnam.com.vn' ,linkT:'https://www.facebook.com/aptechvietnam.com.vn' },
    { icon: <ImLocation2/>, content: " Address  ",  link:'https://goo.gl/maps/ZpQNC6EVQjhebJzH7',linkT:'https://goo.gl/maps/ZpQNC6EVQjhebJzH7' },
    { icon: <BiSolidPhoneCall/>, content: "Call", link: "tel:012345678" },
  ];
  return (
    <>
      <div className="contact-bar d-none d-lg-flex d-md-flex" data-aos="fade-right">
        <ul>
          {soccial.map((item, index) => (
            <Link to={item.link} target={item.linkT}  key={index} className="link ">
              {" "}
              <li className="">
                <img
                  src={require(`../../assets/Layout_img/${item.icon}`)}
                  alt="icon"
                  className="icon"
                />
                <span className="text-left">{item.content}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
        <ul className="contact-bar-mb d-flex d-lg-none d-md-none"  style={{listStyle:'none'}}>
          {soccialmb.map((item, index) => (
            <Link to={item.link} target={item.linkT} key={index} className="link text-center ">
              {" "}
              <li className="icon-mb">
                <span className="icon-mb-socical">{item.icon}</span>
                <p>{item.content}</p>
              </li>
            </Link>
          ))}
        </ul>
     
    </>
  );
}

export default ContactBar;
