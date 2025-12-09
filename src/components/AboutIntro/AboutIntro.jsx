'use client';
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* LEFT IMAGE */}
          <div className={styles.imageBox}>
            <img src="/images/aboutintro.jpg" alt="RMC Plant" />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.content}>
            <h2>About Our Ready Mix Concrete</h2>
            <p>
              We deliver high-performance Ready Mix Concrete backed by advanced 
              batching systems, premium materials, and a dedicated technical team. 
              Our mission is to deliver precision, consistency, and reliability 
              across every project — residential, commercial, and industrial.
            </p>
            <p>
              With strict quality control, on-time delivery, and a strong commitment 
              to safety, we strive to meet the highest industry standards and provide 
              unmatched value to our clients.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
