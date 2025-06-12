import React from "react";

const ConfirmFormComponent = (detail) => {
  return (
    <div className="row mt-5">
      <div className="col-2"></div>
      <div className="col-8">
        <div className="card">
          <div className="card-header center-align">
            <h6>Information</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-4 right-align"> username : </div>
              <div className="col-8"></div>
            </div>
            <div className="row">
              <div className="col-4 right-align"> password : </div>
              <div className="col-8"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default ConfirmFormComponent;
