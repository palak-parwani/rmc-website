'use client';
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>

          {/* RIGHT CONTENT */}
          <div className={styles.content}>
            <h2 className="heading2">Your Reliable Partner in Ready Mix Concrete</h2>
            <p>
              Super Tech Ready Mix Pvt. Ltd. is a trusted manufacturer and supplier of
              high-quality Ready Mix Concrete, engineered to deliver strength, durability,
              and consistency for every construction requirement.
              <br />Powered by advanced batching plants, stringent quality control systems, and
              a team of experienced professionals, we ensure precision-mixed concrete that
              meets the highest industry standards. From residential developments to large-scale
              commercial and infrastructure projects, our solutions are designed to perform
              under all conditions.
            </p>
            <p>
              With a strong focus on timely delivery, technical excellence, and customer
              satisfaction, Super Tech Ready Mix Pvt. Ltd. stands as a reliable partner in
              building foundations that last for generations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
