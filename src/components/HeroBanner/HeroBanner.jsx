import { Row, Col, Button } from "react-bootstrap";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>

      <div className="container">
        <Row className={`align-items-center ${styles.padding}`}>
          {/* LEFT CONTENT */}
          <Col md={7}>
            <h1 className={styles.title}>
              Premium Ready-Mix Concrete for Strong & Reliable Construction
            </h1>

            <p className={styles.subtitle}>
              Delivering high-quality, precisely mixed concrete with advanced
              batching technology. Guaranteed strength, durability, and
              on-time delivery for all your residential, commercial, and
              infrastructure projects.
            </p>

            {/* CTA Buttons */}
            <div className={styles.btnGroup}>
              <a href = " /contactus">
                <Button className={styles.primaryBtn}>
                  Get a Free Quote
                </Button>
              </a>

              <a href =" /products">
                <Button className={styles.secondaryBtn}>
                  Explore Mix Grades →
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
