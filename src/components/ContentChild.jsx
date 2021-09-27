import React from "react";

const ContentChild = ({ con }) => {
  return (
    <div className="col-md-3 mt-3">
      <div className="card">
        <div className="card-body">
          <div className="spanDiv">
            <span>{con.icon}</span>
          </div>
          <div className="titleDiv">
            <h4>{con.title}</h4>
            <h6>{con.text}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentChild;
