import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Stack } from "react-bootstrap";
import Hero_section from "./Hero_section";
import HeroBg from "./heroBg";

export default function MainInfo() {
  return (
    <Container>
      {/* <HeroBg /> */}
      <Hero_section />
    </Container>
  );
}
