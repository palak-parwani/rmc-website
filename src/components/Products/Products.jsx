"use client";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Products.module.css";

const productData = [
  {
    id: 1,
    title: "Ready-Mix Concrete (RMC)",
    img: "/images/product1.jpg",
    description:
      "Premium-grade Ready-Mix Concrete manufactured using automated batching systems. Available in M20 to M50 grades for residential, commercial, and infrastructure projects.",
  },
  {
    id: 2,
    title: "Concrete Blocks (Solid & Hollow)",
    img: "/images/product2.jpg",
    description:
      "Durable, dimensionally accurate blocks ideal for wall construction, partitions, and load-bearing structures.",
  },
  {
    id: 3,
    title: "Interlocking Paver Blocks",
    img: "/images/product3.jpg",
    description:
      "High-strength paver blocks suitable for parking areas, pathways, gardens, and industrial flooring.",
  },
  {
    id: 4,
    title: "Precast Concrete Products",
    img: "/images/product4.jpg",
    description:
      "Precast beams, slabs, boundary walls, drain covers, and custom precast elements for fast, efficient construction.",
  },
  {
    id: 5,
    title: "Custom Concrete Mix Designs",
    img: "/images/product1.jpg",
    description:
      "Fiber-reinforced mixes, waterproof mixes, high-strength mixes, and customized concrete designed for special projects.",
  },
  {
    id: 6,
    title: "Aggregates & Sand Supply",
    img: "/images/product2.jpg",
    description:
      "Quality-tested crushed aggregate, coarse sand, fine sand, and GSB materials for concrete production and site work.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>Our Products</h1>
          <p className={styles.heroSubtitle}>
            High-performance concrete and construction materials engineered for durability,
            strength, and long-term reliability.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="standard-padding">
        <h2 className={styles.sectionHeading}>Quality Products for Every Construction Need</h2>
        <p className={styles.sectionText}>
          From Ready-Mix Concrete to precast solutions, we deliver products crafted with precision,
          advanced technology, and strict quality control to meet a wide range of project requirements.
        </p>

        <div className={styles.grid}>
          {productData.map((prod) => (
            <div key={prod.id} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={prod.img} alt={prod.title} className={styles.img} />
              </div>

              <h3 className={styles.cardTitle}>{prod.title}</h3>

              <p className={styles.cardText}>{prod.description}</p>
            </div>
          ))}
        </div>
      </section>

     

      <Footer />
    </>
  );
}
