import React from "react";
import "./style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import PlayerList from "./PlayersList";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "rgb(20, 3, 68)" }}>
            FIFA
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">View Players</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1 className="mb-4 text-center"> FIFA player cards </h1>
      <PlayerList />
    </div>
  );
}

export default App;
