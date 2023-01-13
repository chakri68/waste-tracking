import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";

const NavBar = () => {
  const menu = useRef(null);
  const items = [{ label: " " }, { label: "Home" }, { label: "Faqs" }];
  const menuitems = [
    { label: "Logout", icon: "pi pi-fw pi-power-off" },
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: (e) => {
        window.location.hash = "";
      },
    },
    {
      label: "Login",
      icon: "pi pi-fw pi-sign-in",
      command: (e) => {
        window.location.hash = "login";
      },
    },
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
      command: (e) => {
        window.location.hash = "profile";
      },
    },
  ];
  const start = [
    <>
      <div style={{ display: "flex" }}>
        <img alt="logo" src="./logo1.png" height="80" className="mr-2"></img>

        <a
          href="http://localhost:3000/"
          className="no-underline  mb-3 text-justify text-500 cursor-pointer"
          style={{ fontSize: "1.5rem", marginTop: "23px" }}
        >
          Go Clean
        </a>
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
        style={{ zIndex: "1000", marginTop: "15px" }}
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
    <div className="card">
      <Menubar
        model={items}
        start={start}
        end={end}
        style={{
          height: "80px",
          position: "fixed",
          width: "100vw",
          zIndex: "100000",
        }}
      />
    </div>
  );
};

export default NavBar;
