'use client';
import styles from "./Process.module.css";
import { FaBalanceScale, FaCogs, FaWater, FaTruck, FaCheckCircle } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Material Selection",
      desc: "Premium cement, aggregates, and admixtures are selected carefully to ensure high quality.",
      icon: <FaBalanceScale />
    },
    {
      step: "02",
      title: "Automated Batching",
      desc: "Computer-controlled batching ensures accurate proportions for each grade of concrete.",
      icon: <FaCogs />
    },
    {
      step: "03",
      title: "Controlled Mixing",
      desc: "High-efficiency mixers blend materials uniformly to deliver consistent strength.",
      icon: <FaWater />
    },
    {
      step: "04",
      title: "Transit Delivery",
      desc: "Concrete is transported in transit mixers to maintain workability and freshness.",
      icon: <FaTruck />
    },
    {
      step: "05",
      title: "On-Site QC Testing",
      desc: "Slump tests and quality verification ensure the concrete meets project requirements.",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">

        <h2 className={styles.heading}>Our Process</h2>

        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <div key={i} className={styles.stepBox}>
              
              {/* Step Circle */}
              <div className={styles.circle}>
                <span>{s.step}</span>
              </div>

              {/* Line connector except last */}
              {i !== steps.length - 1 && <div className={styles.line}></div>}

              {/* Icon */}
              <div className={styles.icon}>{s.icon}</div>

              {/* Title */}
              <h3>{s.title}</h3>

              {/* Description */}
              <p>{s.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
