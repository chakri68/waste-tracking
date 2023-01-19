import React from "react";
import NavBar from "../NavBar";

const OrgVolunteers = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <div className="main">
        <NavBar />
      </div>
      <div className="text-800 font-bold text-4xl mt-8 mb-3 text-center">
        Available Volunteers
      </div>
      <div className="surface-0  p-6 shadow-2 border-round">
        <div
          style={{ height: "60vh", backgroundColor: "white" }}
          className="border-2 border-dashed border-300"
        >
          <div className="grid p-5">
            <div className="col-4">
              <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">
                      Orders
                    </span>
                    <div className="text-900 font-medium text-xl">152</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-blue-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">24 new </span>
                <span className="text-500">since last visit</span>
              </div>
            </div>
            <div className="col-4">
              <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">
                      Revenue
                    </span>
                    <div className="text-900 font-medium text-xl">$2.100</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-orange-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">%52+ </span>
                <span className="text-500">since last week</span>
              </div>
            </div>
            <div className="col-4">
              <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">
                      Customers
                    </span>
                    <div className="text-900 font-medium text-xl">28441</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">520 </span>
                <span className="text-500">newly registered</span>
              </div>
            </div>
            <div className="col-4">
              <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">
                      Comments
                    </span>
                    <div className="text-900 font-medium text-xl">
                      152 Unread
                    </div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-purple-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-comment text-purple-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">85 </span>
                <span className="text-500">responded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgVolunteers;
