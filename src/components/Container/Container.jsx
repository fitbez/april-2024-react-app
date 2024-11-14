import Button from "../Button/Button";
import Header, { Component1 } from "../Hero/Hero";
import "./Container.css";
import { Form, TestComponent2 } from "../Nav/Nav";

// component
function Container() {
  return (
    <div className="container">
      <Header />
      <Component1 />
      <TestComponent2 />
      <Button name="LOG IN" x="rgb(117, 212, 212)" />
      <Button name="REGISTER" x="rgb(117, 678, 212)" />
      <Button name="SUM" x="red" />
      <Form />
    </div>
  );
}

//default export
export default Container;
