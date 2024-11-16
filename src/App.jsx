import { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import "./App.css";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import AddFriends from "./components/AddFriends/AddFriends";
import FriendsList from "./components/FriendsList/FriendsList";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";

//functional component
// Component name uses PascalCase
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-friends" element={<AddFriends />} />
        <Route path="friends-list" element={<FriendsList />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
