import React from "react";
import Navbar from "../Components/Navbar";
import "./LandingPage.css";
import Footer from "../Components/Footer";
import PST_Steps from "../Components/PST_Steps";

function LandingPage() {
  return (
    <div className="col-sm-12 fixed_style">
      <div className="row">
        <div className="col-sm-12 bg-light">
          <Navbar />
        </div>
      </div>
      {/* Center Pic + Text */}
      <div className="row">
        <div className="col-md-5 col-sm-12 m-auto p-md-0 p-5 ">
          <div className="row ">
            <div className="col-sm-12 ms-5">
              <h1 className="display-2 fw-bolder">
                Ultimate software development
              </h1>
            </div>
            <div className="col-sm-12 ms-5">
              <h5 className="fw-lighter">
                Increasing yur bussiness success with technology
              </h5>
            </div>
            <div className="col-sm-11 ms-5">
              <button className="btn btn-dark  px-4 mx-4">Lets Do This!</button>
              <a>Watch Overview</a>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 ">
          <img
            className="img-fluid"
            src={require("../Assets/images/landing.png")}
            alt=""
          />
        </div>
      </div>
      {/* 2 ROWS HAVING SAME BACKGROUND */}
      <div className="bg_image_1">
        {/* Official Partners Section */}
        <div className="col-sm-12">
          <div className="row mt-5 m-5">
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://powercode.co.uk/static/media/Union.017da616.svg"
                alt=""
              />
              <h4 className="pt-2">UN Official Partner</h4>
            </div>
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://powercode.co.uk/static/media/Union.017da616.svg"
                alt=""
              />
              <h4 className="pt-2">UN Official Partner</h4>
            </div>
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://powercode.co.uk/static/media/Frame3.b15284fb.svg"
                alt=""
              />
              <h4 className="pt-2">Forbes Bussiness Counselling</h4>
            </div>
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://powercode.co.uk/static/media/Union.017da616.svg"
                alt=""
              />
              <h4>UN Official Partner</h4>
            </div>
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://powercode.co.uk/static/media/Union.017da616.svg"
                alt=""
              />
              <h4 className="pt-2">UN Official Partner</h4>
            </div>
            <div className="col-sm">
              <img
                src="https://powercode.co.uk/static/media/Union.017da616.svg"
                alt=""
              />
              <h4 className="pt-2">UN Official Partner</h4>
            </div>
            <div className="col-sm">
              <img
                className="img-fluid"
                src="https://powercode.co.uk/static/media/Union.017da616.svg"
                alt=""
              />
              <h4 className="pt-2">UN Official Partner</h4>
            </div>
          </div>
        </div>
        {/* GET YOUR PERFECTLY SKILLED TEAM */}
        <div className="row p-5">
          <div className="col-sm-12">
            <h1 className="fw-bold">Get Your Perfectly-skilled Team</h1>
          </div>
          <div className="row mt-5">
            <div className="col-sm-3">
              <img
                className="img-fluid mx-auto d-block"
                src="https://powercode.co.uk/static/media/up_to_7_days.49c05c1d.svg"
                alt=""
              />
            </div>
            <PST_Steps
              img_src={
                "https://powercode.co.uk/static/media/3days.1f570d48.svg"
              }
              Step_no={1}
              Days={2}
              Description={
                "You tell us your requirements to shape a vision of a design and development team perfect for your project."
              }
            />
            <PST_Steps
              img_src={
                "https://powercode.co.uk/static/media/2days2.ae4e834f.svg"
              }
              Step_no={2}
              Days={2}
              Description={
                "We search within our engineer talent pool. If there's a match, we can start the next day. In 60% of cases, we begin in less than 7 days."
              }
            />
            <PST_Steps
              img_src={
                "https://powercode.co.uk/static/media/3days.1f570d48.svg"
              }
              Step_no={3}
              Days={3}
              Description={
                "All specialists in the team receive their scope of work with the deadlines, and the development process begins!"
              }
            />
          </div>
        </div>
      </div>
      <div className="bg_color_2 row m-5 rounded-4">
        <div className="col-sm-6 m-auto">
          <h2>Find Out Your Project Cost</h2>
          <p>We’ll contact you within one business day (GMT +2).</p>
          <badge className="badge bg-dark text_size_card px-5 py-2 rounded-4">
            Get estimation
          </badge>
        </div>
        <div className="col-sm-6 mt-sm-0 ">
          <img
            className="img-fluid img_setting"
            src={require("../Assets/images/objects.png")}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
