import React, { useState } from "react";
import { Chart } from "primereact/chart";
import NavBar from "../NavBar";

const OrgReportStats = () => {
  const [chartData] = useState({
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
        hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div className="main" style={{ backgroundColor: "white" }}>
      <div>
        <NavBar />
      </div>

      <div className="card flex mt-8 p-4">
        <div className="text-800 font-bold text-4xl mb-3 text-center">
          Reports Statics
        </div>
        <div className="flex">
          <Chart
            type="pie"
            data={chartData}
            options={lightOptions}
            style={{
              position: "relative",
              width: "40%",
              padding: "50px",
              paddingLeft: "90px",
            }}
          />
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <div className="flex-initial">
              <div className="mb-3 pr-2 flex-initial font-bold text-6xl text-center">
                <span className="text-1100">User </span>
                <span className="text-blue-1100">Details</span>
              </div>
              <div className="mb-3 text-center">
                <span className="block text-2xl mb-1">
                  <strong>Name:</strong>test
                </span>
                <span className="block text-2xl  mb-1">
                  <strong>Email:</strong> chaitanya.tata215@gmail.com
                </span>

                <span className="block text-2xl  mb-1">
                  <strong>Number of contributions:</strong>
                  <img src="./Badge.webp" style={{ height: "50px" }} /> 0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrgReportStats;
