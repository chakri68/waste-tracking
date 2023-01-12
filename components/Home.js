import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import NavBar from "./NavBar";

const Main = () => {
  // Required
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [description, setdescription] = useState("");
  // End

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="grid grid-nogutter surface-0 text-800 mt-5">
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
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src="./Clean.webp"
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{
              height: "50vh",
              width: "50vw",
              clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      <div className="surface-0 text-center pt-3">
        <div className="mb-3 font-bold text-5xl">
          <span className="text-900">One Product, </span>
          <span className="text-blue-600">save future</span>
        </div>
        <div className="text-1xl mb-6">
          Unlock the power of sustainability with our website - learn how to
          save the future, one step at a time
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-search text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Find</div>
            <span className="text-800 line-height-3">
              Find and report a local waste hotspot and make a difference,Be a
              part of the solution by identifying neglected waste areas in your
              community,Your waste location reports will assist in our efforts
              to clean up and preserve the environment
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-image text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Click</div>
            <span className="text-700 line-height-3">
              Snap a pic of waste and save it on your phone,Help us clean up the
              planet by uploading your waste photos,Your photo contributions
              will aid in our efforts to keep our environment clean.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Report</div>
            <span className="text-700 line-height-3">
              Upload your waste photo with location details in the form
              provided,Please include a short description and the exact location
              of the waste in the image you upload,Your submission will aid in
              our efforts to clean up and preserve the environment
            </span>
          </div>
        </div>
      </div>
      {/* Start of Map */}
      <div className="surface-0 p-8 shadow-2 border-round pt-5 pb-3">
        <div className="surface-0 text-700 text-center">
          <div className="text-900 font-bold text-5xl pt-3 mb-3">
            Spot waste near you?
          </div>
          <Button
            label="Report to us"
            herf="http://localhost:3000/report"
            className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
          />
        </div>
        <br />
        <div
          style={{ height: "350px" }}
          className="border-2 border-dashed border-300"
        >
          {" "}
          Map{" "}
        </div>
      </div>
      {/* Map End */}
      <div className="grid grid-nogutter surface-0 text-800">
        <div
          className="col-12 md:col-6 overflow-hidden"
          style={{ height: "600px" }}
        >
          <img
            src="./waste.webp"
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{ height: "200px" }}
          />
        </div>

        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
          <div className="surface-0 text-700 text-center">
            <div className="text-900 font-bold text-5xl mb-3">
              Join Our Volenteer Program
            </div>
            <div className="text-700 text-2xl mb-5">
              Be the change you wish to see in the world - Join our waste
              management team as a volunteer today!
            </div>
            {/* Volunteer Form */}
            <Button
              label="Join Now"
              onClick={() => onClick("displayResponsive")}
              className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
            />
            <Dialog
              visible={displayResponsive}
              onHide={() => onHide("displayResponsive")}
              breakpoints={{ "960px": "75vw" }}
              style={{ width: "50vw" }}
            >
              <div className="flex align-items-center justify-content-center">
                <div className="text-center mb-5">
                  <img
                    src="./logo1.png"
                    alt="hyper"
                    height={120}
                    className="mb-3"
                  />
                  <div className="text-900 text-3xl font-medium mb-3">
                    Volunteer Form
                  </div>

                  <div style={{ padding: "30px" }}>
                    <label
                      htmlFor="text"
                      className="block text-900 font-medium mb-2"
                    >
                      Preffered Name
                    </label>
                    <InputText
                      id="name"
                      type="text"
                      placeholder="Enter Name"
                      className="w-full mb-3"
                    />

                    <label
                      htmlFor="text"
                      className="block text-900 font-medium mb-2"
                    >
                      Why you want to bocome a volunteer?
                    </label>

                    <InputTextarea
                      rows={5}
                      cols={60}
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                    />

                    <br />
                    <br />

                    <Button
                      label="Submit"
                      icon="pi pi-user"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
