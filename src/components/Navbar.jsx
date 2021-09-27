import React from "react";
import { VscMenu } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { BsChevronDown } from "react-icons/bs";

const Navbar = ({ isTrue, setIsTrue }) => {
  return (
    <>
      <div className="row navBar">
        <div className="col-6 navMenu">
          <VscMenu className="menuIcon" onClick={() => setIsTrue(true)} />
          <div>
            <label htmlFor="valueSearch">
              <VscSearch className="searchIcon" />
            </label>
            <input type="text" placeholder="Search.." id="valueSearch" />
          </div>
        </div>
        <div className="col-6 contactMan">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg"
              alt="man"
            />
            <h6>
              John Doe <BsChevronDown className="downIcon" />
            </h6>
          </div>
          <a href="https://kun.uz">Logout</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
