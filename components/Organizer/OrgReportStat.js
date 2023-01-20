import React, { useState } from "react";
import { Chart } from "primereact/chart";
import NavBar from "../NavBar";

const OrgReportStats = ({ reportData }) => {
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
      <div className="card flex p-6">
        <div className="text-800 font-bold text-4xl mb-4 text-center">
          Reports Statics
        </div>
        <div className="flex">
          <Chart
            type="pie"
            data={chartData}
            options={lightOptions}
            style={{
              position: "relative",
              width: "300px",
              height: "40vh",
            }}
          />
          <div className="col-10 md:col-6 p-3 mt-2 text-center md:text-center align-items-center ">
            <div className="flex-initial">
              {/* <div className="mb-3 pr-2 flex-initial font-bold text-6xl text-center">
                <span className="text-1100">User </span>
                <span className="text-blue-1100">Details</span>
              </div> */}
              <div className="mb-2 text-center">
                <span className="block text-2xl mb-1">
                  <strong>Total number of Reports:</strong> test
                </span>
                <span
                  className="block text-2xl  mb-1"
                  style={{ color: "orange" }}
                >
                  <strong>Pending :</strong> 30
                </span>
                <span className="block text-2xl  mb-1" style={{ color: "red" }}>
                  <strong>Resolved :</strong> 30
                </span>
                <span className="block text-2xl mb-1">
                  <strong>Number of active residents:</strong> 100+
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
