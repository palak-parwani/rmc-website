'use client';
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.grid}>

          <div className={styles.col}>
            <h3>RMC Works</h3>
            <p>
              High-quality Ready Mix Concrete delivered with precision,
              reliability, and engineering excellence.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <p>📍 RMC Plant, Your City</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@rmcworks.com</p>
          </div>

        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} RMC Works. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
