import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa'
import './CardProduct.scss'
import { BsPlusLg } from "react-icons/bs";
import {Value} from '../../../../../Data/DataSava';
export const CardProduct = ({items,option}) => {
    const {setCart}=useContext(Value);
    const {cart}=useContext(Value);
    

    const navigate=useNavigate()
    const handleClick=()=> {
        navigate(`/shop/${option+'/'+items.id}`)
    }
    const handleAddCard = () => {
        let check = cart.filter((item) => item.id === items.id)
        
        if (check.length > 0) {

            
        }
        else {
            setCart([items, ...cart]);
        }
      
    }
    const limitWord=(item)=> {
        if(item.length>20) {
            const trimmedWord = item.substring(0, 20);
            const lastWhitespaceIndex = trimmedWord.lastIndexOf(' ');
            return trimmedWord.substring(0, lastWhitespaceIndex) + ' ...';
        }
        return item;
    }
    const name=limitWord(items.name);
  
    return (
       
            <Card className="card-product" >
                <Card.Title className="card-title-product " onClick={()=>handleClick()}>
                {items.tag ? <span className="span-best-seller">{items.tag}</span> : null}
                    <div className="card-name-catergory-product">
                        <span className="card-name-product">{name}</span>
                        <span className="card-catergory-product">Catergory: {items.category}</span>
                    </div>
                    <span className="icon-wishlist">
                        <FaRegHeart />
                    </span>
                </Card.Title>
                <Card.Img className='card-img-1' src={items.img[0].img1}  onClick={()=>handleClick()} />
                <Card.Body onClick={()=>handleAddCard()}>
                    <div className="card-price-shopping-product" >
                    <span className="card-price-product">${items.price}</span>
                        <div className="  fui-button-shiny-3 card-shopping-product"> <BsPlusLg/> Add to card </div>
                    </div>
                </Card.Body>
            </Card>
    )
}
