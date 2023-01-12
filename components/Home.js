import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Gallery } from "./Gallery";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";

const Main = () => {
  const menu = useRef(null);
  const items = [{ label: " " }, { label: "Home" }, { label: "Faqs" }];
  const menuitems = [
    { label: "Logout", icon: "pi pi-fw pi-power-off" },
    { label: "Home", icon: "pi pi-fw pi-home" },
    {
      label: "Login",
      icon: "pi pi-fw pi-sign-in",
    },
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
    },
  ];
  const start = [
    <>
      <div style={{ display: "flex" }}>
        <img alt="logo" src="./logo1.png" height="80" className="mr-2"></img>

        <span
          className="text-blue-800 text-center"
          style={{ display: "flex", alignItems: "center" }}
        >
          Go Clean
        </span>
      </div>
    </>,
  ];
  const end = [
    <>
      <Menu
        model={menuitems}
        popup
        ref={menu}
        id="popup_menu"
        style={{ zIndex: "1000" }}
      />{" "}
      <Avatar
        icon="pi pi-user"
        className="mr-2"
        size="large"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
        onClick={(event) => menu.current.toggle(event)}
      />
      ,
    </>,
  ];
  return (
    <div>
      <div>
        <div className="card">
          <Menubar
            model={items}
            start={start}
            end={end}
            style={{
              height: "80px",
              position: "fixed",
              width: "100vw",
              zIndex: "1000",
            }}
          />
        </div>
      </div>
      <div className="grid grid-nogutter surface-0 text-800">
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
            src="./clean.jpg"
            alt="hero-1"
            className="md:ml-auto block md:h-full"
            style={{
              clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      <div className="surface-0 text-center">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">One Product, </span>
          <span className="text-blue-600">save future</span>
        </div>
        <div className="text-700 mb-6">
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
      <br />
      <br />
      {/* <Gallery /> */}
      <br />
      {/* Start of Map */}
      <div className="surface-0 p-4 shadow-2 border-round">
        <div className="surface-0 text-700 text-center">
          <div className="text-900 font-bold text-5xl mb-3">
            Found Waste near you?
          </div>
          <Button
            label="Report to us"
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
            <Button
              label="Join Now"
              className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
