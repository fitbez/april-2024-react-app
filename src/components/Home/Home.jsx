import Button from "../Button/Button";
import Header, { Component1 } from "../Hero/Hero";
import "./Home.css";
import { Form, TestComponent2 } from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

// component
function Home() {
  const isLoggedIn = false;

  // if condition is true do this else do that
  // condition ? do this : do that

  const studentsInfo = [
    {
      name: "John Doe",
      grade: "10",
      age: "15",
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Fitsum B",
      grade: "11",
      age: "16",
      image:
        "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Hanna T",
      grade: "12",
      age: "17",
      image:
        "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    },
  ];

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("login");
  };

  return (
    <div className="container">
      <Header />
      {isLoggedIn && <Button name="LOG OUT" x="rgb(137, 8, 212)" />}
      {!isLoggedIn && (
        <Button onClick={handleLogin} name="LOG IN" x="rgb(117, 212, 212)" />
      )}
      {!isLoggedIn && <Button name="REGISTER" x="rgb(117, 678, 212)" />}
      {studentsInfo.map((student, idx) => {
        return (
          <div key={idx}>
            <img width="200" height="250" src={student.image} alt="" />
            <h3>Name: {student.name}</h3>
            <h4>Age: {student.age}</h4>
            <h4>Grade: {student.grade}</h4>
          </div>
        );
      })}
    </div>
  );
}

//default export
export default Home;
