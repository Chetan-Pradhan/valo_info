import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Col,
  Collapse,
  Container,
  Navbar,
  NavDropdown,
  Row,
  Stack,
} from "react-bootstrap";

export default function Nav() {
  return (
    // <>
    //   <Container
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-evenly",
    //       backdropFilter: "blur(10px)",
    //       position: "fixed",
    //       top: "0px",
    //       borderBottom: "1px solid rgb(22, 6, 9)",
    //       border: "1px solid black",
    //     }}
    //   >
    <div
      style={{
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: "0",
        boxShadow: "0px 4px 8px black",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
      }}
    >
      <Navbar style={{ color: "white" }}>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          Valorant Info.
        </Navbar.Brand>

        <Navbar.Brand
          href="#"
          className="p-2 ms-auto"
          style={{ color: "white" }}
        >
          Home
        </Navbar.Brand>

        <NavDropdown title="Links" className="p-2">
          <NavDropdown.Item
            href="https://playvalorant.com/en-gb/"
            target="_blank"
          >
            Valorant
          </NavDropdown.Item>
          <NavDropdown.Item href="https://www.riotgames.com/en" target="_blank">
            Riot Games👊
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
    //   </Container>
    // </>
  );
}
