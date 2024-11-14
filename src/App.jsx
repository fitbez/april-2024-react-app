import { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import "./App.css";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

//functional component
// Component name uses PascalCase
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Nav />
      <Container />
    </>
  );
}

export default App;
