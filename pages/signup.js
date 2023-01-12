import Link from "next/link";
import { Button } from "primereact/button";

export default function Registration() {
  return (
    <form action="#" className="sign-up-form" style={{ height: "100vh" }}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <br />
      <Button
        label="Sign Up"
        onClick={""}
        className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
      />
      <p className="social-text">Or{""}</p>
      <a
        href="http://localhost:3000/login"
        className="font-medium no-underline ml-2 mb-3 text-blue-500 cursor-pointer"
      >
        Sign Up
      </a>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}
