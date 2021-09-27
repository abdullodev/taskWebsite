import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiFillCaretRight } from "react-icons/ai";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiBarChart2Line } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHandBag } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";

const Menu = ({ isTrue, setIsTrue }) => {
  return (
    <>
      <div
        className={"menuCompBack " + (isTrue ? "active" : "")}
        onClick={() => setIsTrue(false)}
      ></div>
      <div className={"menuComp " + (isTrue ? "active" : "")}>
        <IoCloseOutline
          className="closeMenu"
          onClick={() => setIsTrue(false)}
        />
        <h2>
          Fin<span>dash</span>
        </h2>
        <ul>
          <li>
            <a href="https://reactjs.org">
              <HiOutlinePresentationChartLine className="menuTypeIcon" />
              Analytics
            </a>
            <AiFillCaretRight className="menuRightIcon" />
          </li>
          <li>
            <a href="https://reactjs.org">
              <RiBarChart2Line className="menuTypeIcon" />
              Top Stocks
            </a>
            <AiFillCaretRight className="menuRightIcon" />
          </li>
          <li>
            <a href="https://reactjs.org">
              <IoBagHandleOutline className="menuTypeIcon" />
              Tranding
            </a>
            <AiFillCaretRight className="menuRightIcon" />
          </li>
          <li>
            <a href="https://reactjs.org">
              <GiHandBag className="menuTypeIcon" />
              Founds
            </a>
            <AiFillCaretRight className="menuRightIcon" />
          </li>
          <li>
            <a href="https://reactjs.org">
              <AiOutlineForm className="menuTypeIcon" />
              Forum
            </a>
            <AiFillCaretRight className="menuRightIcon" />
          </li>
          <li>
            <a href="https://reactjs.org">
              <FaRegLightbulb className="menuTypeIcon" />
              Support
            </a>
            <AiFillCaretRight className="menuRightIcon" />
          </li>
          <li>
            <a href="https://reactjs.org">
              <BsNewspaper className="menuTypeIcon" />
              News
            </a>
            <AiFillCaretRight className="menuRightIcon" />
            <span className="newstag">2</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
