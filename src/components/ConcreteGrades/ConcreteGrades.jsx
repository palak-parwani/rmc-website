'use client';
import styles from "./ConcreteGrades.module.css";

export default function ConcreteGrades() {
  const grades = ["M20", "M25", "M30", "M35", "M40", "M45", "M50"];

  return (
    <section className={styles.section}>
      <div className="container">

        <h2 className={styles.heading}>Concrete Grades We Offer</h2>
        <p className={styles.subtitle}>
          High-performance concrete mix grades suitable for residential,
          commercial, and infrastructure projects.
        </p>

        <div className={styles.grid}>
          {grades.map((grade, index) => (
            <div key={index} className={styles.card}>
              <h3>{grade}</h3>
              <p>Ideal for structural strength, durability & long-term performance.</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
