import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BiChevronDown } from "react-icons/bi";

import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const data = [
  {
    name: "20",
    uv: 300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "21",
    uv: 250,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "22",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "23",
    uv: 150,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "24",
    uv: 250,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "25",
    uv: 280,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "26",
    uv: 140,
    pv: 4300,
    amt: 2100,
  },
];

class Foot extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      footline: [
        {
          id: 1,
          iconChart: <AiOutlineLineChart />,
          title: "Your diaposit has updated to: Paid $1950",
          time: "34 MINUTES AGO",
          iconStar: <AiOutlineStar />,
          iconClose: <AiOutlineCloseCircle />,
        },
        {
          id: 2,
          iconChart: <AiOutlineLineChart />,
          title: "Your wixdrawal of $5000 has been procceed",
          time: "2 DAYS AGO",
          iconStar: <AiOutlineStar />,
          iconClose: <AiOutlineCloseCircle />,
        },
        {
          id: 3,
          iconChart: <AiOutlineLineChart />,
          title: "You sold 10 Stocks of 1000 shares - ABC Company",
          time: "1 WEEK AGO",
          iconStar: <AiOutlineStar />,
          iconClose: <AiOutlineCloseCircle />,
        },
      ],
    };
  }

  static demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

  render() {
    return (
      <div className="row footRow">
        <div className="col-md-6  footColClass">
          <div className="footTitle">
            <h2>Marketing Trends</h2>
            <h5>
              This Week <BiChevronDown className="footTitleIcon" />
            </h5>
          </div>
          <div style={{ width: "100%", height: 260 }} className="footChart">
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6 mt-1 footColClass2">
          <div className="titleRecent">
            <h3>RECENT ACTIVITY </h3>
          </div>
          {this.state.footline.map((foot, index) => (
            <div className="line" key={index}>
              <span className="span1">{foot.iconChart}</span>
              <h3>
                {foot.title} <br />
                <span>{foot.time}</span>
              </h3>
              <span className="span2">{foot.iconStar}</span>
              <span className="span3">{foot.iconClose}</span>
            </div>
          ))}

          <div className="seeAllTag">
            <span>SEE ALL</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Foot;
