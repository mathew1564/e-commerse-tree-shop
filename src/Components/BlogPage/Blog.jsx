import React,{useState} from 'react'
import "./Blog.scss"
import { Container, Row, Col,Form } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import BlogImg from '../../assets/Layout_img/bg-blog.jpg';
import { blog } from '../../Data/Blog';
import BlogItem from './BlogItem';
import { AiOutlineHome,AiOutlineSearch } from "react-icons/ai";
import { BreadCrumb } from 'primereact/breadcrumb';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
export default function Blog() {
  document.title = 'Blog'
  const items = [{ label: "Blog", url: "/blog" }];
  const home = { icon: <AiOutlineHome />, url: "/" };
  const data = blog;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * 12;
  const indexOfFirstItem = indexOfLastItem - 12;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section fluid className='blog p-0 '  >
      
        {/* <div className='title'>
              BLOG
        </div> */}
       
          <img src={BlogImg} alt="" className='logo-baner' />
       
     
      <Container>
        <BreadCrumb model={items} home={home} className="mt-3" />

     
       <InputGroup className="search-input mt-3">
          <InputGroup.Text >
          
            <AiOutlineSearch />
          </InputGroup.Text>
          <Form.Control className="" placeholder="Search blog"  />
        </InputGroup>
      
        <Row className=" d-flex justify-content-evenly mt-5 mb-5">
          {currentItems.map((item) => (
        <>
        <Col lg={3} md={6} sm={9} xs={12} className='contain' >
            <Link to={`/blog/${item.id}`} className='link-direct d-inline-block'>
              
            <BlogItem key={item.id} item={item} />
            </Link>
            </Col>
        </>
          ))}
        </Row>
      </Container>
      <Pagination className="d-flex justify-content-center ">
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
          disabled={currentPage === Math.ceil(data.length / 12)}
        />
        <Pagination.Last
          onClick={() => handlePageChange(Math.ceil(data.length / 12))}
          disabled={currentPage === Math.ceil(data.length / 12)}
        />
      </Pagination>
    </section>
  )
}
