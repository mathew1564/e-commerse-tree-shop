import React, { useContext } from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import ScrollToTop from "../../Common/ScrollToTop";
import ContactBar from "../../Common/ContactBar/ContactBar";
import Home from "../HomePage/HomePage";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { AllRoutes } from "../../Routes/AllRoutes";
import NotFound from "./NotFound";
import { blog } from "../../Data/Blog";
import BlogDetail from "../BlogPage/BlogDetail";
import Setting from "../Setting/Setting";
import Cookies from "js-cookie";
import { Value } from "../../Data/DataSava";

export default function Main() {
  const allRoutes = AllRoutes;
  const isLogin = Cookies.get("isLogin");
  return (
    <>
      <TopBar />
      <Container fluid>
        <Routes>
          {allRoutes.map((item, index) => (
            <Route key={index} path={item.link} element={item.component} />
          ))}
          {blog.map((item, index) => (
            <Route
              key={index}
              path={`/blog/${item.id}`}
              element={<BlogDetail item={item} />}
            />
          ))}
          {isLogin ? <Route path="/setting" element={<Setting />} /> : ""}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ContactBar />
        <ScrollToTop />
        <Footer />
      </Container>
    </>
  );
}
