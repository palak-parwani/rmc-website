'use client';
import styles from "./Footer.module.css";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="standard-padding">

        <Row className="gy-4">

          {/* COMPANY INFO */}
          <Col md={5}>
            <h3>Super Tech Ready Mix Pvt. Ltd.</h3>
            <p className={`desc ${styles.desc}`}>
              A trusted manufacturer and supplier of premium Ready Mix Concrete,
              delivering consistent strength, durability, and on-time supply for
              residential, commercial, and infrastructure projects.
            </p>
            <p className={`desc ${styles.desc}`}>
              IS-standard compliant concrete with strict quality control.
            </p>
          </Col>
          <Col md={1} className="d-lg-block d-none"></Col>
          {/* QUICK LINKS */}
          <Col md={3}>
            <h4 className={`heading2 ${styles.heading}`}>Quick Links</h4>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/aboutus">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/machineries">Machineries & Equipments</Link></li>
              <li><Link href="/contactus">Contact Us</Link></li>
            </ul>
          </Col>

          {/* CONTACT + SERVICES */}
          <Col md={3}>
            <h4 className={`heading2 ${styles.heading}`}>Contact & Services</h4>
            <p className={`desc ${styles.desc}`}>📍 RMC Plant, Your City, India</p>
            <p className={`desc ${styles.desc}`}>📞 +91 98765 43210</p>
            <p className={`desc ${styles.desc}`}>✉️ info@supertechreadymix.com</p>
          </Col>
        </Row>

        {/* FOOTER BOTTOM */}
        <div className={styles.bottom}>
          © {new Date().getFullYear()} Super Tech Ready Mix Pvt. Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
