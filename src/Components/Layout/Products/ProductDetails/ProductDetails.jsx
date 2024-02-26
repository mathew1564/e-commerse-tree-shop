import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { Rating } from "primereact/rating";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NotFound from "../../NotFound";
import { CardProduct } from "./CardProduct/CardProduct";
import SlideCardImg from "./SlideImg/SlideCardImg"

import { Toast } from 'primereact/toast';

import { BreadCrumb } from 'primereact/breadcrumb';
import { AiOutlineHome } from "react-icons/ai";
import './ProductDetails.scss';
import { BsCartCheck } from 'react-icons/bs'
import imghowtoplant from '../../../../assets/image/techwiz.png'
import avatar from '../../../../assets/image/avtar5.jpg'
import { AllProduct } from "../../../../Data/AllProduct";
import { Value } from '../../../../Data/DataSava'
const productList = AllProduct;

const ProductDetail = () => {
    const home = { icon: <AiOutlineHome />, url: "/" };
    const toast = useRef(null);
    const { id } = useParams();
    const product = productList.find((item) => item.id === Number(id));
    const [items,setItems]=useState()
    
    useEffect(()=> {
        if(product) {
         
            setItems(    [{ label: "Shop All", url: "/shop/all" },{ label: product.category, url: `/shop/all/tree/${product.category}` },{ label: product.name, url: `/shop/all/tree/${product.id}` }])
        }
        
    },[])
    const [showCardList, setShowCardList] = useState(4)

    const [countProduct, setCountProduct] = useState(0)
    const [ratingOrtherUser, setRatingOrtherUser] = useState(null);
    const [ratingUser, setRatingUser] = useState(null);
    const [commentValue, setCommentValue] = useState('');
    const [nameComment, setNameComment] = useState('')
    const [emailComment, setEmailComment] = useState('')

    const [checked, setChecked] = useState(false);
    const { setCart } = useContext(Value)
    const { cart } = useContext(Value)

    useEffect(() => {
     if(product) {
        document.title = product.name;
     }
      }, []);


    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success Added!', detail: 'ADD TO CARD SUCCESS', life: 1000 });
    }
    const handleAddCard = () => {
        let check = cart.filter((item) => item.id === product.id)
        
        if (check.length > 0) {


        }
        else {
            setCart([product, ...cart]);
        }
       
    }

    const handleClickAddProduct = () => {
        setCountProduct(countProduct + 1)
    }

    const handleClickSubProduct = () => {
        setCountProduct(countProduct - 1)
    }

    return (

       <>
       {
        product?(
            <div className='products-details-master'>
            <Container>
                <Toast ref={toast} />
                <div className='products-details-div'>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="breadcrum-posi">
                    <BreadCrumb model={items} home={home} className="mt-3 mb-5 d-block"  />
                           

                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <div className="name-plant">{product.name}</div>
                            <div className="img-div">
                                <SlideCardImg
                                    mouseTracking
                                    items={product.img}
                                    responsive={{
                                        0: { items: 1 },
                                        768: { items: 1 },
                                    }}
                                />
                            </div>

                                    </Col>
                                    <Col lg={1} md={1} className="d-none d-sm-none d-md-block d-lg-block"></Col>
                                    <Col lg={6} md={6} sm={12} xs={12}>
                                        <div className="description-plan">
                                            <strong className="label-smalltext">Size: </strong> <span className="smalltext-des">{product.size}</span> <br /><br />
                                            <strong className="label-smalltext">Origin: </strong> <span className="smalltext-des">{product.origin}</span> <br /><br />
                                            <strong className="label-smalltext">Planting: </strong>
                                            <span className="smalltext-des">{product.plating}</span> <br /><br />
                                            <strong className="label-smalltext">Light: </strong>
                                            <span className="smalltext-des">{product.light}</span> <br /><br />
                                            <strong className="label-smalltext">{product.name} hedging: </strong >
                                            <span className="smalltext-des">{product.desc}</span> <br /><br />
                                            <strong className="label-smalltext">Catergory: </strong>
                                            <span className="smalltext-des">{product.category}</span> <br /><br />
                                            <strong className="label-smalltext">Price: </strong>
                                            <span className="smalltext-des">${product.price} </span> <br /><br />
                                            <div className="add-product-div">

                                                <div>
                                                    <button className="button-count" onClick={handleClickSubProduct}>-</button>
                                                    <button className="input-count m-0 p-0" > {countProduct}</button>
                                                    <button className="button-count" onClick={handleClickAddProduct}>+</button>
                                                </div>
                                                <div>
                                                    <Button className="buynow fui-button-shiny-3 ">Buy Now</Button>{' '}

                                                </div>
                                                <div>
                                                    <Button className="icon-buynow fui-button-shiny-3 " onClick={(product) => handleAddCard(product)}>
                                                        <BsCartCheck />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <span className='label-howto'>How to plan</span>
                                <div className="howtoplant-div">
                                    <Row>
                                        <Col lg={5} md={5} sm={12} xs={12}>
                                            <img src={imghowtoplant} alt="how to plant" className="img-howtoplant" style={{ width: '100%', height: '305px', objectFit: 'cover', borderRadius: '68px' }}></img>
                                        </Col>
                                        <Col lg={1} md={1} className="d-none d-sm-none d-md-block d-lg-block"></Col>
                                        <Col lg={5} md={5} sm={12} xs={12}>
                                            <div className="description-howtoplant">
                                                <strong className="label-smalltext">Eviroment: </strong> <span className="smalltext-des">{product.takeCare[0].enviroment} </span> <br /><br />
                                                <strong className="label-smalltext">Water: </strong> <span className="smalltext-des">{product.takeCare[1].water}</span> <br /><br />
                                                <strong className="label-smalltext">Tree pruning: </strong>
                                                <span className="smalltext-des">{product.takeCare[2].pruning}</span> <br /><br />
                                                <strong className="label-smalltext">Fertilize: </strong>
                                                <span className="smalltext-des">{product.takeCare[3].fetilize}
                                                </span><br /><br />
                                                <strong className="label-smalltext">Sick tree: </strong >
                                                <span className="smalltext-des">{product.takeCare[4].sick}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <span className="label-review">Review</span>
                                    <Row style={{ padding: '0px 45px' }}>
                                        <div className="review-div">
                                            <Col lg={1} md={1} sm={2} xs={2}>
                                                <img src={avatar} alt="avatar" className="avatar-review" />
                                            </Col>
                                            <Col lg={11} md={11} sm={10} xs={10}>
                                                <Rating value={5} onChange={(e) => setRatingOrtherUser(e.value)} cancel={false} className="rating-other-user" />
                                                <div className="rating-other-user-des">
                                                    <div className="content-review">Beautiful tree</div>
                                                    <div className="author-review" >Phuong Anh</div>
                                                    <div className="date-review" >Tue 2023/07/21</div>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                                <Row>
                                    <div className="your-review-div">
                                        <Row >
                                            <Col lg={4} md={4} sm={4} xs={4}>
                                                <div className="d-flex">
                                                    <span className="your-review-label" >Rating</span>
                                                    <span>
                                                        <Rating value={ratingUser} onChange={(e) => setRatingUser(e.value)} cancel={false} style={{ paddingLeft: '20px' }} />
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}>
                                                <div className="your-comment-label">Your Comment</div>
                                                <div style={{ marginTop: '10px' }}>
                                                    <InputTextarea value={commentValue} onChange={(e) => setCommentValue(e.target.value)}
                                                        className="textarea-comment"
                                                        autoResize
                                                        rows={8} cols={30}
                                                        style={{ paddingLeft: '30px' }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <div className="your-name-lable">Your name</div>
                                                <div>
                                                    <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} className='input-comment' />
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <div className="your-name-lable">Your Email</div>
                                                <div>
                                                    <InputText value={emailComment} onChange={(e) => setEmailComment(e.target.value)} className='input-comment' />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col>
                                                <div className="d-flex align-items-center">
                                                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked} />
                                                    <label htmlFor="ingredient4" className="ml-2 rule-comment">Save my information for the next comment</label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginTop: '10px' }}>
                                            <Col lg={3} md={6} sm={3} xs={3}>
                                                <Button variant="primary">Send</Button>
                                            </Col>
                                        </Row>

                                    </div>
                                </Row>
                                <span className="label-similar">Similar Product</span>
                                <Row style={{ marginBottom: '40px' }}>
                                    {productList.slice(0, showCardList).map((item) => (
                                        <Col lg={3} md={6} sm={6} xs={12} className="mt-3">
                                            <Link to={`/shop/all/tree/${item.id}`}>
                                                <CardProduct items={item} />
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>
                ) : (
                    <NotFound />
                )
            }
        </>
    );
};


export default ProductDetail;