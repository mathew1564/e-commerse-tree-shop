import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    document.title = `404 Not Found`;
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center" style={{ color: "white", textAlign: "center" }}>
        <div className="col-lg- col-md-6 col-sm-6">
           <img
          src={require(`../../assets/Layout_img/not-found.png`)}
          alt="not page"
          className=" w-100"
          style={{marginTop:'150px'}}
        />
        <div>
          <Link to="/" className="btn btn-primary mb-5">
            Back to Home
          </Link>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default NotFound;
