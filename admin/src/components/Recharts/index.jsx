import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartUsersAndSales = () => {
  const [simpleChartData, setSimpleChartData] = useState([
    {
      name: "JAN",
      TotalSales: 4000,
      TotalUsers: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      TotalSales: 3000,
      TotalUsers: 1398,
      amt: 2210,
    },
    {
      name: "MARCH",
      TotalSales: 2000,
      TotalUsers: 9800,
      amt: 2290,
    },
    {
      name: "APRIL",
      TotalSales: 2780,
      TotalUsers: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      TotalSales: 1890,
      TotalUsers: 4800,
      amt: 2181,
    },
    {
      name: "JUNE",
      TotalSales: 2390,
      TotalUsers: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "SEP",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "OCT",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "NOV",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
    {
      name: "DEC",
      TotalSales: 3490,
      TotalUsers: 4300,
      amt: 2100,
    },
  ]);
  return (
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between p-5 pb-0">
        <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>
      </div>

      <div className="flex items-center gap-5 px-5 pb-7 pt-2">
        <span className="flex items-center gap-1 text-[15px]">
          <span className="block w-[8px] h-[8px] rounded-full bg-[#82ca9d]"></span>
          Total Users
        </span>

        <span className="flex items-center gap-1 text-[15px]">
          <span className="block w-[8px] h-[8px] rounded-full bg-[#8884d8]"></span>
          Total Sales
        </span>
      </div>
      <LineChart
        width={1050}
        height={500}
        data={simpleChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="none" />
        <XAxis dataKey="name" tick={{ fontSize: 13 }} />
        <YAxis tick={{ fontSize: 13 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="TotalSales"
          stroke="#8884d8"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="TotalUsers"
          stroke="#82ca9d"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default LineChartUsersAndSales;
