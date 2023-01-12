import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import UserRequest from "./UserRequest";
import NavBar from "./NavBar";

const Profile = () => {
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);
  const onBasicPageChange = (event) => {
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };
  return (
    <div className="root" style={{ backgroundColor: "white" }}>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-nogutter surface-0 text-800 pt-5">
        <div className="col-12 md:col-6 overflow-hidden flex align-items-center">
          <img
            src="./av-5.png"
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{
              clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
              scale: "0.8",
            }}
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          {/* <section>
            <span className="block text-3xl font-bold mb-1">Name :</span>
            <p
              style={{
                margin: "0",
                marginBottom: "0",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              &nbsp;&nbsp; data.name
            </p>
            <span className="block text-3xl font-bold mb-1">Email :</span>
            <p
              style={{
                margin: "0",
                marginBottom: "0",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              &nbsp;&nbsp; data.email
            </p>
            <span className="block text-3xl font-bold mb-1">Location :</span>
            <p
              style={{
                margin: "0",
                marginBottom: "0",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              &nbsp;&nbsp; data.Location
            </p>
            <span className="block text-3xl font-bold mb-1">
              Number of badges : &nbsp;&nbsp; data.count
            </span>
          </section> */}
          <div className="flex-initial">
            <div className="mb-3 pr-2 flex-initial font-bold text-6xl text-center">
              <span className="text-1100">User </span>
              <span className="text-blue-1100">Details</span>
            </div>
            <div className="mb-3 text-center">
              <span className="block text-2xl mb-1">
                <strong>Name:</strong> John Doe
              </span>
              <span className="block text-2xl mb-1">
                <strong>Location:</strong> losagels
              </span>
              <span className="block text-2xl  mb-1">
                <strong>Email:</strong> johndoe@example.com
              </span>

              <span className="block text-2xl  mb-1">
                <strong>Number of contributions:</strong>
                <img src="./Badge.webp" style={{ height: "50px" }} /> 0
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-900 font-bold text-5xl mb-3 text-center"
        style={{ marginTop: "20px" }}
      >
        Your Reaquests
      </div>
      <div className="items">
        <div
          style={{ height: "50vh" }}
          className="border-2 border-dashed border-300 border-round-lg"
        >
          <UserRequest />
        </div>

        <Paginator
          first={basicFirst}
          rows={basicRows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onBasicPageChange}
        ></Paginator>
      </div>
    </div>
  );
};

export default Profile;
