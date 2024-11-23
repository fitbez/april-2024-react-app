import { createContext, useState } from "react";

//Create our context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleFormReset = () => {
    console.log("clicked the login button");
    setEmail("");
    setPassword("");
  };

  console.log("email", email);
  console.log("password", password);
  return (
    <AppContext.Provider
      value={{
        email,
        password,
        handleChangeEmail,
        handleChangePassword,
        handleFormReset,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
