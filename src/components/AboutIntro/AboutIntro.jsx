'use client';
import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
  return (
    <section className="standard-padding mt-xxl-5 mt-lg-4 mt-0">
      <div className={styles.wrapper}>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <h2 className="heading2 mb-3 mb-md-4">Your Reliable Partner in ReadyMix Concrete</h2>
          <p className="desc">
            SuperTech ReadyMix Pvt. Ltd. is a trusted manufacturer and supplier of
            high-quality ReadyMix Concrete, engineered to deliver strength, durability,
            and consistency for every construction requirement.
            <br />Powered by advanced batching plants, stringent quality control systems, and
            a team of experienced professionals, we ensure precision-mixed concrete that
            meets the highest industry standards. From residential developments to large-scale
            commercial and infrastructure projects, our solutions are designed to perform
            under all conditions.
          </p>
          <p className="desc">
            With a strong focus on timely delivery, technical excellence, and customer
            satisfaction, SuperTech ReadyMix Pvt. Ltd. stands as a reliable partner in
            building foundations that last for generations.
          </p>
        </div>

      </div>
    </section>
  );
}
