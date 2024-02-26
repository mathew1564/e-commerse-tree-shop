import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Button, Form, Dropdown, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import bannerallpro from '../../../../assets/Layout_img/banner-allpro.png'
import './AllProducts.scss'
import { AllProduct } from "../../../../Data/AllProduct";
import { InputText } from "primereact/inputtext";
import { CardProduct } from "../ProductDetails/CardProduct/CardProduct";
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenuUnfold, } from "react-icons/ai";
import ProductDetail from '../ProductDetails/ProductDetails'
import { BreadCrumb } from 'primereact/breadcrumb';
import Pagination from 'react-bootstrap/Pagination';
import Tool from "../AllCategory/Tool/Tool";
import Fertilizer from "../AllCategory/Fertilizer/Fertilizer";
import { AiOutlineHome } from "react-icons/ai";

import bg_allproduct from '../../../../assets/Layout_img/bg-allpro.jpeg'
const productList = AllProduct

const AllProducts = () => {

    const items = [{ label: "Shop All", url: "/shop/all" }];
    const home = { icon: <AiOutlineHome />, url: "/" };
    const [categoryName, setCategoryName] = useState('All Product')
    const [searchValue, setSearchValue] = useState('')
    const [option, setOption] = useState('0')
    const [price, setPrice] = useState('0')

    const AllProduct = productList;

    const [product, setProduct] = useState(productList)
    const [bonsai, setBonsai] = useState([]);
    const [flower, setFlower] = useState([]);
    const [indoor, setIndoor] = useState([]);
    const [outdoor, setOutdoor] = useState([]);
    const [succulent, setScculent] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * 8;
    const indexOfFirstItem = indexOfLastItem - 8;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);




    useEffect(() => {
        let indoorArr = [];
        let outdoorArr = [];
        let flowerArr = [];
        let bonSaiArr = [];
        let succulentArr = [];
        productList.filter((item) => {
            if (item.category === 'indoor') {
                indoorArr.push(item);

            }
            else if (item.category === 'outdoor') {
                outdoorArr.push(item);

            }
            else if (item.category === 'floweringshrubs') {
                flowerArr.push(item);

            }
            else if (item.category === 'bonsai') {
                bonSaiArr.push(item);

            }
            else if (item.category === 'succulents') {
                succulentArr.push(item);
            }
        })

        setIndoor(indoorArr)
        setOutdoor(outdoorArr)
        setFlower(flowerArr)
        setBonsai(bonSaiArr)
        setScculent(succulentArr)

    }, [])
    const [currentDisplayProduct, setCurrentDisplayProduct] = useState(8);
    const handelChange = (e, name) => {

        if (name === "op") {
            setOption(e.target.value);
            if (price === '0') {

                if (e.target.value === '1') {

                    setProduct(bonsai)
                }
                else if (e.target.value === '2') {
                    setProduct(flower)
                }
                else if (e.target.value === '3') {
                    setProduct(indoor)
                }
                else if (e.target.value === '4') {
                    setProduct(outdoor)
                }
                else if (e.target.value === '5') {
                    setProduct(succulent)
                }
                else if (e.target.value === '0') {
                    setProduct(AllProduct)
                }

            }
            else if (price === '1') {
                if (e.target.value === '1') {
                    let producArr = []
                    bonsai.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            producArr.push(item)
                        }

                    })

                    setProduct(producArr)
                }
                else if (e.target.value === '2') {
                    let producArr = []
                    flower.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '3') {
                    let producArr = []
                    indoor.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '4') {
                    let producArr = []
                    outdoor.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '5') {
                    let producArr = []
                    succulent.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '0') {
                    let producArr = []
                    AllProduct.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            product.push(item)
                        }

                    })
                    setProduct(producArr)
                }
            }

            else if (price === '2') {
                if (e.target.value === '1') {
                    let producArr = []
                    bonsai.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '2') {
                    let producArr = []
                    flower.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '3') {
                    let producArr = []
                    indoor.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '4') {
                    let producArr = []
                    outdoor.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '5') {
                    let producArr = []
                    succulent.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            producArr.push(item)
                        }

                    })
                    setProduct(producArr)
                }
                else if (e.target.value === '0') {
                    let producArr = []
                    AllProduct.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            product.push(item)
                        }

                    })
                    setProduct(producArr)
                }
            }







        }
        // value
        else if (name === "va") {

            setPrice(e.target.value);
            if (option === '1') {
                let productArr = [];
                if (e.target.value === '1') {


                    bonsai.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === '2') {
                    bonsai.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === 'Price') {
                    productArr = bonsai;
                }

                setProduct(productArr)
            }
            else if (option === '2') {
                let productArr = [];
                if (e.target.value === '1') {


                    flower.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === '2') {
                    flower.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === 'Price') {
                    productArr = flower;
                }

                setProduct(productArr)
            }
            else if (option === '3') {
                let productArr = [];
                if (e.target.value === '1') {


                    indoor.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === '2') {
                    indoor.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === 'Price') {
                    productArr = indoor;
                }

                setProduct(productArr)
            }
            else if (option === '4') {
                let productArr = [];
                if (e.target.value === '1') {


                    outdoor.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === '2') {
                    outdoor.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === 'Price') {
                    productArr = outdoor;
                }

                setProduct(productArr)
            }

            else if (option === '5') {
                let productArr = [];
                if (e.target.value === '1') {


                    succulent.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === '2') {
                    succulent.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === 'Price') {
                    productArr = succulent;
                }

                setProduct(productArr)
            }
            else if (option === '0') {
                let productArr = [];
                if (e.target.value === '1') {


                    AllProduct.map((item) => {
                        if (item.price > 0 && item.price <= 20) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === '2') {
                    AllProduct.map((item) => {
                        if (item.price > 20 && item.price < 40) {
                            productArr.push(item)
                        }

                    })
                }
                else if (e.target.value === 'Price') {
                    productArr = succulent;
                }

                setProduct(productArr)

            }

            if (e.target.value === '0') {

                if (option === '1') {

                    setProduct(bonsai)
                }
                else if (option === '2') {
                    setProduct(flower)
                }
                else if (option === '3') {
                    setProduct(indoor)
                }
                else if (option === '4') {
                    setProduct(outdoor)
                }
                else if (option === '5') {
                    setProduct(succulent)
                }
                else if (option === '0') {
                    setProduct(AllProduct)
                }

            }
        }

    }
    const style = 'tree'
    useEffect(() => {
        document.title = 'All Product';
      }, []);

    return (
        <>

            <div className="bg-allproduct">
                <img src={bg_allproduct} alt="" className="img-bgall" />
            </div>
            <Container className="allproduct-master">

                <BreadCrumb model={items} home={home} className="mt-3 mb-5" />
                <div className="allproduct-div">
                    <div className="container">
                        <Row className="filter-div">
                            <Col lg={2} md={3}>
                                <Form.Select className="form-select-catalog" aria-label="Category" onChange={e => handelChange(e, "op")} >
                                    <option value={0} checked>Category</option>
                                    <option value={1}>Bonsai</option>
                                    <option value={2}>Flowering Shrubs</option>
                                    <option value={3}>Indoor</option>
                                    <option value={4}>Outdoor</option>
                                    <option value={5}>Succulents</option>
                                </Form.Select>
                            </Col>
                            <Col lg={2}>
                                <Form.Select className="form-select-catalog" onChange={e => handelChange(e, "va")}>
                                    <option value={0} checked>Price</option>
                                    <option value={1}>0-20</option>
                                    <option value={2}>20-40</option>
                                </Form.Select>
                            </Col>
                            <Col lg={4} md={2}></Col>
                            <Col lg={4} md={4} >
                                <InputGroup className="">
                                    <InputGroup.Text id="basic-addon1" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}><AiOutlineSearch /></InputGroup.Text>
                                    <Form.Control className="form-control-input"
                                        placeholder="Search by name..."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className="plant-div">
                            <span className="label-catelogy">Plants</span>

                            <div className="card-of-cate">

                                <Row>
                                    {currentItems.length > 0 ? currentItems.map((items, index) => (
                                        <Col lg={3} key={index} className="mt-4">
                                            {/* <Link to={`/shop/all/tree/${items.id}`}> */}
                                            <CardProduct items={items} option={'all/tree'} />
                                            {/* </Link> */}
                                        </Col>
                                    )) : (<Col lg={12} className="text-center fs-3 fw-bold mt-5">NOT FOUND</Col>)}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination className='d-flex justify-content-center mt-5 '>
                    <Pagination.First
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />

                    <Pagination.Item active>{currentPage}</Pagination.Item>

                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === Math.ceil(product.length / 8)}
                    />
                    <Pagination.Last
                        onClick={() => handlePageChange(Math.ceil(product.length / 8))}
                        disabled={currentPage === Math.ceil(product.length / 8)}
                    />
                </Pagination>
                <Tool props={'none'}/>
                <Fertilizer  props={'none'}/>
            </Container>
        </>
    )
}

export default AllProducts

