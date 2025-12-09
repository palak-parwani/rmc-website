"use client";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CTA from "../CTA/CTA";
import styles from "./Machineries.module.css";

export default function Machineries() {
  const equipmentData = [
    {
      category: "Piling Machines",
      img: "/images/m1.jpg",
      machines: [
        "XCMG Piling Rig XR 180D Model 2019 (3)",
        "XCMG Piling Rig XR 150D Model 2018 (1)",
        "Casagrande Piling Rig B-180 Model 2015 (1)",
        "Casagrande Piling Rig B-170 Model 2016 (1)",
        "Casagrande Piling Rig B-125 Model 2015 (1)",
      ],
    },
    {
      category: "Cranes",
      img: "/images/m1.jpg",
      machines: [
        "Mobile Crane 25 Ton (3)",
        "Gantry Crane 50 Ton (2)",
        "Derrick Crane 160 Ton (1)",
        "Hydera 12–14 Ton (3)",
        "Escort Crane F15 (2019) (1)",
      ],
    },
    {
      category: "Loaders & Earth-Moving",
      img: "/images/m1.jpg",
      machines: [
        "HM-2021 Front End Loader (5)",
        "Mahindra Backhoe Loader (1)",
        "Escort Loader (1)",
        "Backhoe Loader (2)",
        "Fork Lift (4)",
      ],
    },
    {
      category: "Trucks & Fleet",
      img: "/images/m1.jpg",
      machines: [
        "Tractor Trolley (15)",
        "10-Tyre Hyva Trucks (60)",
        "Water Tankers (3000–10000 L) (5)",
        "Truck Trailers (5)",
      ],
    },
    {
      category: "Concrete Pumps",
      img: "/images/m1.jpg",
      machines: [
        "Boom Placer 36 m (3)",
        "Schwing SP 1800 Concrete Pump (4)",
        "Schwing SP 1400 Concrete Pump (6)",
        "Aquires 1405d4 Pump (2)",
      ],
    },
    {
      category: "Batching Plants & Mixers",
      img: "/images/m1.jpg",
      machines: [
        "Wiggert & Co. 120 m³/hr Batching Plant (1)",
        "Greaves Cotton Twin-Shaft 60 m³/hr (2)",
        "BP-45 m³ Twin Shaft (1)",
        "BP-30 m³ Pan Mixer (1)",
        "BP-25 m³ Pan Mixer (2)",
        "Transit Mixer Fleet (40)",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Machineries & Equipments</h1>
          <p className={styles.heroSubtitle}>
            Modern, reliable, and high-capacity equipment powering our Ready-Mix Concrete operations.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className={styles.section}>
        <h2 className={styles.pageHeading}>Our Machinery & Equipment Lineup</h2>
        <p className={styles.pageSubtext}>
          Built for reliability and performance — ensuring uninterrupted RMC supply and smooth on-site operations.
        </p>

        <div className={styles.equipmentGrid}>
          {equipmentData.map((item, i) => (
            <div key={i} className={styles.equipmentCard}>
              <img src={item.img} alt={item.category} className={styles.cardImg} />

              <h3 className={styles.cardTitle}>{item.category}</h3>

              <ul className={styles.machineList}>
                {item.machines.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
