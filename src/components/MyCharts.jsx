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

const data = [
  {
    name: "Jan 20",
    uv: 150,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Jan 21",
    uv: 140,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jan 22",
    uv: 130,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Jan 23",
    uv: 140,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jan 24",
    uv: 130,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jan 25",
    uv: 120,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jan 26",
    uv: 110,
    pv: 4300,
    amt: 2100,
  },
];

class MyCharts extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

  render() {
    return (
      <div className="row mt-3 mb-2">
        <div className="col-md-12 chartsRow">
          <div style={{ width: "100%", height: 260 }} className="chartDiv">
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
      </div>
    );
  }
}
export default MyCharts;
