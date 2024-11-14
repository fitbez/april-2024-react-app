import "./Nav.css";
import React from "react";

//named export
export function Nav() {
  return (
    <nav>
      <h3 className="logo">FRIENDS</h3>
      <ul className="menu">
        <li>HOME</li>
        <li>ADD FRIENDS</li>
        <li>FRIENDS LIST</li>
        <li>LOGIN</li>
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
