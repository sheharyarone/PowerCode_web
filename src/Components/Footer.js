import React from "react";
import './Footer.css';
function Footer() {
  return (
    <div className="row bg_color p-4 text-white mt-2 p-1">
        <div className="col-sm-12 ">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="col-sm-12  ">
                <img src={require("../Assets/images/footer.png")} alt="" />
              </div>
              <div className="col-sm-12 pt-4 pb-2 ps-3">
                <h4>Ultimate Software Development</h4>

                <h5>Increasing your bussiness succes with Technology</h5>
                <h5 className="pt-3">
                  <span className="me-3">
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span className="me-3">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span className="me-3">
                    <i className="fab fa-twitter-square"></i>
                  </span>
                  <span className="me-3">
                    <i className="fab fa-instagram-square"></i>
                  </span>
                  <span className="me-3">
                    <i className="fab fa-behance-square"></i>
                  </span>
                  <span className="me-3">
                    <i className="fab fa-dribbble"></i>
                  </span>
                </h5>
                <h6 className="text-secondary pt-2">
                  © 2022 Powercode. All Rights Reserved. Privacy Policy
                </h6>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <h6>Mobile Development</h6>
              <h6>Web Development</h6>
              <h6>Design</h6>
              <h6>Bussiness Analytics</h6>
              <h6>Legacy Code Modernization</h6>
              <h6>Quality Assurance</h6>
              <h6>Ecommerce Consulting</h6>
              <h6>MVP</h6>
            </div>
            <div className="col-sm-12 col-md-2">
              <h6>Ecommerce</h6>
              <h6>Foodtech</h6>
              <h6>HealthCare</h6>
              <h6>Enterprise Solutions</h6>
              <h6>Education</h6>
              <h6>Entertainment</h6>
              <h6>Real Estate</h6>
              <h6>Hospitality</h6>
            </div>
            <div className="col-sm-12 col-md-2">
              <h6>Company</h6>
              <h6>Careers</h6>
              <h6>Case Studies</h6>
              <h6>Insights</h6>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
