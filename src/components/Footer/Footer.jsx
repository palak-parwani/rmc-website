'use client';
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.padding} standard-padding`}>

        <Row className="gy-4">

          {/* COMPANY INFO */}
          <Col md={5} className="mt-0">
            {/* <h3>SuperTech ReadyMix Pvt. Ltd.</h3> */}
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/images/stlogo.webp"
                alt="Construction Logo"
                width={140}
                height={50}
                className={styles.logo}
              />
            </Link>
            <p className={`desc ${styles.desc} mt-md-3 mt-2`}>
              A trusted manufacturer and supplier of premium ReadyMix Concrete,
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
            <p className={`desc ${styles.desc}`}>
              📞{" "}
              <a href="tel:+919829268506">+91 9829268506</a>,{" "}
              <a href="tel:+919887863410">+91 9887863410</a>
            </p>

            <p className={`desc ${styles.desc}`}>✉️ info@supertechreadymix.com</p>
          </Col>
        </Row>

        {/* FOOTER BOTTOM */}
        <div className={styles.bottom}>
          © {new Date().getFullYear()} SuperTech ReadyMix Pvt. Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
