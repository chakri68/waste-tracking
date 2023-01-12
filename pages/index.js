import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Main from "../components/Home";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import Form from "../components/Form";
import Login from "../components/Login";
import ReportForm from "../components/ReportForm";
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
      <Main />
      {/* <Form /> */}
      {/* <Login /> */}
      {/* <ReportForm /> */}
      {/* <Profile /> */}
    </>
  );
}
