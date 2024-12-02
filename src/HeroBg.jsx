import { Container } from "react-bootstrap";
import styles from "./hrobg.module.css";

export default function HeroBg() {
  return (
    <div className={styles.container}>
      {/* <img src={myimg} className={styles.img}></img> */}
      <div className={styles.img}></div>
    </div>
  );
}
