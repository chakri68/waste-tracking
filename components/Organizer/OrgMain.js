import React from "react";
import NavBar from "../NavBar";
import { Button } from "primereact/button";

const OrgMain = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-nogutter surface-0 text-800 mt-5">
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src="/Recycle.jpg"
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{
              height: "50vh",
              width: "50vw",
              clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Reduce, Reuse, Recycle:
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              Making a Sustainable Future Possible
            </div>

            <Button
              label="Learn More"
              type="button"
              className="mr-3 p-button-raised"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default OrgMain;
