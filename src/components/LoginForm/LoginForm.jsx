import "./LoginForm.css";
import { AppContext } from "../../context";
import { useContext } from "react";

function LoginForm() {
  const {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleFormReset,
  } = useContext(AppContext);
  return (
    <>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handleChangePassword}
      />
      <br />
      <input type="button" value="Login" onClick={handleFormReset} />
    </>
  );
}

export default LoginForm;
