'use client';

import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ContactModal from "../ContactModal/ContactModal";
import styles from "./CTA.module.css";

export default function CTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <div className="standard-padding">
          <Row className="align-items-center g-4">

            {/* LEFT SIDE CONTENT */}
            <Col md={8}>
              <h2 className={styles.title}>Need Ready-Mix Concrete for Your Next Project?</h2>

              <p className={styles.text}>
                Get high-quality RMC delivered on time with assured strength, accuracy,
                and professional on-site support. Talk to our experts today.
              </p>



            </Col>

            {/* RIGHT SIDE — BUTTON ONLY */}
            <Col md={4}>
                <Button
                  className={styles.btnPrimary}
                  onClick={() => setShowModal(true)}
                >
                  Request a Callback
                </Button>
             

            </Col>

          </Row>
        </div>
      </div>

      {/* CONTACT FORM MODAL */}
      <ContactModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </section>
  );
}
