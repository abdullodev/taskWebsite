import React, { useState } from "react";
import ContentChild from "./ContentChild";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { IoHourglassOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";

const Content = () => {
  const [content, setContent] = useState([
    {
      id: 1,
      icon: <AiOutlinePieChart />,
      title: "$32300",
      text: "Total Invest",
    },
    {
      id: 1,
      icon: <AiOutlineFolderOpen />,
      title: "$16500",
      text: "Total Expence",
    },
    { id: 1, icon: <BiBell />, title: "$22700", text: "Total Revenue" },
    {
      id: 1,
      icon: <IoHourglassOutline />,
      title: "$66400",
      text: "Total Balance",
    },
  ]);
  return (
    <div className="row">
      {content.map((con, index) => (
        <ContentChild key={index} con={con} />
      ))}
    </div>
  );
};

export default Content;
