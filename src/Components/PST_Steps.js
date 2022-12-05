import React from "react";

function PST_Steps({ img_src, Step_no, Days, Description }) {
  return (
    <div className="col-sm-3">
      <div className="row">
        <div className="col-sm-4">
          <img className="img-fluid" src={img_src} alt="" />
        </div>
        <div className="col-sm-8">
          <div className="row">
            <h3>Step {Step_no}</h3>
          </div>
          <div className="row">
            <div className="col-sm">
              <badge className="badge bg-dark">{Days} days</badge>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <span className="pt-3">{Description}</span>
      </div>
    </div>
  );
}

export default PST_Steps;
