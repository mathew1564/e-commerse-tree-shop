import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Button, Form, Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { AllProduct } from "../../../../../Data/AllProduct"; 
import { InputText } from "primereact/inputtext";
import { CardProduct } from "../../ProductDetails/CardProduct/CardProduct";
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenuUnfold, } from "react-icons/ai";
import { BreadCrumb } from 'primereact/breadcrumb';
import { AiOutlineHome } from "react-icons/ai";
import NotFound from '../../../../../Components/Layout/NotFound';
import Pagination from 'react-bootstrap/Pagination';

const productList = AllProduct

const Succulent = () => {
    document.title = 'Succulent';
    
    const [searchValue, setSearchValue] = useState('')
    const items = [{ label: "Shop All", url: "/shop/all" },{ label: "Succulent", url: "/shop/all/tree/succulent" }];
    const home = { icon: <AiOutlineHome />, url: "/" };

    const [product, setProduct] = useState(productList)
   
  
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * 8;
    const indexOfFirstItem = indexOfLastItem - 8;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);



    useEffect(() => {
        
        let succulentArr = [];
        productList.filter((item) => {
           if (item.category === 'succulents') {
                succulentArr.push(item);
            }
        })

     setProduct(succulentArr)

    }, [])
    

    return (
<>
            {
                product?(


        <div className="bonsai-master">
            <div className="allproduct-div">
                <div className="container">
                    <div className="label-catelogy">Succulent</div>
                    <BreadCrumb model={items} home={home} className="mt-3 mb-5" />
                    <Row className="filter-div">
                        <Col lg={2} md={3}>
                            <Form.Select className="form-select-catalog" aria-label="Category"  >
                                <option value={0} checked>Category</option>
                                <option value={1}>Bonsai</option>
                                <option value={2}>Flowering Shrubs</option>
                                <option value={3}>Indoor</option>
                                <option value={4}>Outdoor</option>
                                <option value={5}>Succulents</option>
                            </Form.Select>
                        </Col>
                        <Col lg={2}>
                            <Form.Select className="form-select-catalog" >
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
                        <div className="card-of-cate">
                            <Row>
                                {currentItems.length > 0 ? currentItems.map((items, index) => (
                            
                                    <Col lg={3} key={index} className="mt-4">
                                      
                                            <CardProduct items={items} option={'all/tree'} />
                                       
                                    </Col>
                                )):''}
                                {/* )) : (<Col lg={12} className="text-center fs-3 fw-bold mt-5">NOT FOUND</Col>)} */}
                            </Row>
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
                    </div>
                </div>
            </div>


        </div>
                ) :(<NotFound/>)
            }
</>
    )
}

export default Succulent

