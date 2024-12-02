import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./HeroSection.module.css";

export default function Hero_section() {
  const [imgUrl, setimgUrl] = useState([]);

  useEffect(() => {
    const images = fetch("https://valorant-api.com/v1/weapons").then(
      (respons) =>
        respons
          .json()
          .then((data) =>
            setimgUrl(data.data.map((imgurl) => imgurl.displayIcon))
          )
    );
  }, []);

  return (
    <div>
      <Container>
        {imgUrl.map((url, index) => (
          <Card
            key={index}
            style={{
              width: "69rem",
              height: "20rem",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "white",
              border: "none",
              zIndex: "-2",
              boxShadow: "0px 5px 8px black",
            }}
            className="mt-5"
          >
            <Card.Img
              variant="top"
              src={url}
              style={{
                maxWidth: "32rem",
                height: "12rem",
                padding: "5px",
                objectFit: "contain",
              }}
            />
          </Card>
        ))}
      </Container>
    </div>
  );
}
