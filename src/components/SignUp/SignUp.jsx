import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  //option 1
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  console.log("user info", userInfo);
  return (
    <>
      <h3>Sign-up</h3>
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={userInfo.firstName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={userInfo.lastName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Confirm Password: </label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={userInfo.confirmPassword}
        onChange={handleChange}
      />
      <br />
      <input type="button" value="Sign up" />
    </>
  );
}

export default SignUp;
