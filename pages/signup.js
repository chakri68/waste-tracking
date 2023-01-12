import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useState } from "react";
import swal from "sweetalert";

export default function Registration() {
  let router = useRouter();
  let [loading, setLoading] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log({ data });
    if (data.ok) {
      swal({
        text: "Successfully Signed up",
        icon: "success",
      });
      router.push("/login");
    } else {
      swal({
        text: "Error",
        icon: "error",
      });
    }
    setLoading(false);
  }
  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="sign-up-form"
      style={{ height: "100vh" }}
    >
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button
        label="Sign Up"
        loading={loading}
        className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
      />
      <p className="social-text">Or</p>
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
