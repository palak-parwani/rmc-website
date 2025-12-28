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
            <div className={styles.textAnimate}>
              <h1 className={styles.title}>
                Premium Ready-Mix Concrete for Strong & Reliable Construction
              </h1>

              <p className={styles.subtitle}>
                High-quality, precision-mixed concrete produced using advanced
                batching technology. Assured strength, durability, and timely
                delivery for residential, commercial, and infrastructure projects.
              </p>

              <div className={styles.btnGroup}>
                <a href=" /contactus">
                  <Button className={styles.primaryBtn}>
                    Get a Free Quote
                  </Button>
                </a>

                <a href=" /products">
                  <Button className={styles.secondaryBtn}>
                    Explore Mix Grades →
                  </Button>
                </a>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </section>
  );
}
