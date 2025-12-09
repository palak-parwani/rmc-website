'use client';
import styles from "./Services.module.css";
import { FaFlask, FaTruck, FaCogs, FaPumpSoap } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      // img: "/images/service1.jpg",
      icon: <FaTruck />,
      title: "Ready Mix Concrete Supply",
      text: "High-strength concrete delivered with precise batching and efficient logistics.",
    },
    {
      // img: "/images/service2.jpg",
      icon: <FaFlask />,
      title: "Quality Testing",
      text: "On-site & laboratory testing ensuring complete strength and durability.",
    },
    {
      // img: "/images/service3.jpg",
      icon: <FaPumpSoap />,
      title: "Concrete Pumping",
      text: "Reliable pumping solutions ideal for high-rise & large-scale projects.",
    },
    {
      // img: "/images/service4.jpg",
      icon: <FaCogs />,
      title: "Custom Mix Designs",
      text: "M20–M50, waterproof, fiber-reinforced & high-performance concrete.",
    },
  ];

  return (
    <section className={`${styles.section} `}>
      <div className="container">
        <h2 className={styles.heading}>Our Services</h2>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div className={styles.card} key={i}>
              {/* <img src={s.img} alt={s.title} className={styles.image} /> */}
              <div className={styles.info}>
                <div className={styles.icon}>{s.icon}</div>
                <h3 className={styles.head}>{s.title}</h3>
                <p className={styles.subhead}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
