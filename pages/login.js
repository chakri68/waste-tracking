import { useState } from "react";
import swal from "sweetalert";
import { Button } from "primereact/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
      callbackUrl: "/",
    });
    console.log({ res });
    if (res.ok) {
      swal({
        text: "Successfully Logged in",
        icon: "success",
      });
      router.push(res.url);
    } else {
      swal({
        text: "Wrong Credentials",
        icon: "error",
      });
    }
  };
  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="sign-in-form"
        style={{ height: "100vh" }}
      >
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
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
          label="Sign In"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />

        <p className="social-text">Or </p>
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
    </>
  );
}
