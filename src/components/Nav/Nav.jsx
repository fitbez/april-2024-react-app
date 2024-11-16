import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";

//named export
export function Nav() {
  return (
    <nav>
      <h3 className="logo">FRIENDS</h3>
      <ul className="menu">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="add-friends">ADD FRIENDS</NavLink>
        </li>
        <li>
          <NavLink to="friends-list">FRIENDS LIST</NavLink>
        </li>
        <li>
          <NavLink to="login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="sign-up">SIGN UP</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export function Form() {
  return (
    <>
      <h2>Register</h2>
      <form action="">
        <input type="text" name="" id="" placeholder="first name" />
        <input type="text" name="" id="" placeholder="last name" />
        <input type="email" name="" id="" placeholder="email" />
        <input type="password" name="" id="" placeholder="password" />
        <input type="button" value="Register" />
      </form>
    </>
  );
}

//React Fragment <></>, <React.Fragment></React.Fragment>, <div></div>

export function TestComponent1() {
  //returning only one element
  return <h1>Return one html element</h1>;
}

export function TestComponent2() {
  //returning more than one element
  return (
    <>
      <h1>Heading</h1>
      <p>The description goes here</p>
    </>
  );
}
