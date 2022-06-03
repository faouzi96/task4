import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Signin from "./components/Signin";

function App() {
  // const [users, setUsers] = useState({})
  // useEffect(()=>{
  //   fetch("/api").then((response)=> response.json()).then((data)=>{
  //     console.log(data)
  //     setUsers(data)
  //   });
  // },[])
  return (
    <Container className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <Signin />
    </Container>
  );
}

export default App;
