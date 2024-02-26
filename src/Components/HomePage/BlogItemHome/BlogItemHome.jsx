import React, { useState, useEffect } from "react";
import "./BlogItemHome.scss";
import { blog } from "../../../Data/Blog";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogItemHome.scss";
import BlogItem from "../../BlogPage/BlogItem";
function BlogItemHome() {
  const [numPosts, setNumPosts] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setNumPosts(3); // lg
      } else if (window.innerWidth >= 768) {
        setNumPosts(2); // md
      } else {
        setNumPosts(1); // xs
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container">
      <div className="title-product row">
        <div className="title-name col-lg-6 col-md-6 col-sm-12">
          From Plant Life
        </div>
      </div>
      <Row className="d-flex mb-1">
        {blog.slice(0, numPosts).map((item, index) => (
          <Col lg={4} md={6} sm={12} className="">
            <Link
              to={`/blog/${item.id}`}
              className="link-direct d-inline-block mb-4"
            >
              <BlogItem key={item.id} item={item} />
            </Link>
          </Col>
        ))}
      </Row>
      <div className="row ">
        <Link to="/blog" className="text-center">
          <button className="learn-more mb-5">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">All Posts</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogItemHome;
