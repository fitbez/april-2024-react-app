import "./LoginForm.css";

function LoginForm() {
  return (
    <>
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" />
      <br />
      <input type="button" value="Login" />
    </>
  );
}

export default LoginForm;
