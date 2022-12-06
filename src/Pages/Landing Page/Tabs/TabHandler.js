import React, { useState } from "react";
import './Tabs.css';

import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
function TabHandler() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tabNo) => {
    setActiveTab(tabNo);
  };
  return (
    <div className="row m-4">
      <h1 className="ms-4">Estimation of Your Project</h1>
      <div className="col-sm-12 col-lg-5 m-4">
        <div
          className={activeTab !== "tab1" ? "row text-muted pb-4" : "row pb-4"}
          onClick={() => handleClick("tab1")}
        >
          <div className="col-sm-1">
            <img
              className="img-fluid"
              src="https://powercode.co.uk/static/media/firstSelected.dea3608e.svg"
              alt=""
            />
          </div>
          <div className="col-sm-8">
            <h3 className={activeTab !== "tab1" ? "fw-bolder" : " "}>Getting client's requirements</h3>
          </div>
        </div>

        <div
          className={activeTab !== "tab2" ? "row text-muted pb-4" : "row pb-4"}
          onClick={() => handleClick("tab2")}
        >
          <div className="col-sm-1">
            <img
              className="img-fluid"
              src="https://powercode.co.uk/static/media/firstSelected.dea3608e.svg"
              alt=""
            />
          </div>
          <div className="col-sm-8">
            <h3 className={activeTab !== "tab2" ? "fw-bolder" : " "}>Solution proposal & project estimation</h3>
          </div>
        </div>
        <div
          className={activeTab !== "tab3" ? "row text-muted" : "row"}
          onClick={() => handleClick("tab3")}
        >
          <div className="col-sm-1">
            <img
              className="img-fluid"
              src="https://powercode.co.uk/static/media/firstSelected.dea3608e.svg"
              alt=""
            />
          </div>
          <div className="col-sm-8">
            <h3 className={activeTab !== "tab3" ? "fw-bolder" : " "}>Detailed analysis & PRD</h3>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6">
        {activeTab === "tab1" ? <FirstTab /> : " "}
        {activeTab === "tab2" ? <SecondTab /> : " "}
        {activeTab === "tab3" ? <ThirdTab /> : " "}
      </div>
    </div>
  );
}

export default TabHandler;
