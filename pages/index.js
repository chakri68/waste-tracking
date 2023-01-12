import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Main from "../components/Home";

import Form from "../components/Form";
import Login from "../components/Login";
import Profile from "../components/Profile";
// import "primeflex@3.2.1/primeflex.min.css";
// {
//   <link
//     rel="stylesheet"
//     href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css"
//   />;
// }

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Main /> */}
      {/* <Form /> */}
      <Profile />
      {/* <Login /> */}
      {/* <ReportForm /> */}
      {/* <Profile /> */}
    </>
  );
}
