import React ,{useEffect}from "react";
import Banner from "../HomePage/Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import Statis from "./Statis/Statis";
import CategoryItem from "./CategoryItem/CategoryItem";
import NewProduct from "./NewProduct/NewProduct";
import BlogItemHome from "./BlogItemHome/BlogItemHome";
import SellerProduct from "./NewProduct copy/SellerProduct";
import Review from "./Review/Review";
import "./HomePage.scss";
import "./CarePlant/CarePlant";
import CarePlant from "./CarePlant/CarePlant";
import Service from "./Service/Service";
import "aos/dist/aos.css";
import AOS from "aos";
function HomePage() {
  document.title = 'Homepage'
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container-fuild home-page-warper">
      <Banner />
      <Statis />
      <CategoryItem />
      <NewProduct />
      <CarePlant />
      <SellerProduct/>
      <Service />
      <Review/>
      <BlogItemHome/>
    </div>
  );
}

export default HomePage;
