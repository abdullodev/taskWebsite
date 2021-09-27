import React, { useState } from "react";
import Content from "./components/Content";
import Menu from "./components/Menu";
import MyCharts from "./components/MyCharts";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

const App = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="container-fluid">
      <Navbar isTrue={isTrue} setIsTrue={setIsTrue} />
      <Menu isTrue={isTrue} setIsTrue={setIsTrue} />
      <Content />
      <MyCharts />
      <Foot />
    </div>
  );
};

export default App;
