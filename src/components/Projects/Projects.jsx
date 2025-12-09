'use client';
import { useState } from "react";
import styles from "./Projects.module.css";
import { FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";


export default function Projects() {
  const [previewImage, setPreviewImage] = useState(null);

  const products = [
    {
      title: "Ready-Mix Concrete",
      desc: "Concrete manufactured in a batching plant and delivered using transit mixers.",
      img: "/images/product1.jpg",
    },
    {
      title: "Concrete Bricks",
      desc: "High-strength masonry concrete bricks for structural application.",
      img: "/images/product2.jpg",
    },
    {
      title: "Pavers & Tiles",
      desc: "Durable tiles & paver blocks for flooring and landscaping.",
      img: "/images/product3.jpg",
    },
    {
      title: "Solid / Hollow Blocks",
      desc: "Strong blocks suitable for partitions, walls, and industrial structures.",
      img: "/images/product4.jpg",
    },
  ];

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.heading}>
            What We Offer
          </h2>

          <div className={styles.grid}>
            {products.map((item, i) => (
              <div
                className={styles.card}
                key={i}
                onClick={() => setPreviewImage(item.img)}
              >
                <div className={styles.bg}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.overlay}>
                  <FiSearch className={styles.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE POPUP MODAL */}
      {previewImage && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <img src={previewImage} alt="Preview" />

            <button
              className={styles.closeBtn}
              onClick={() => setPreviewImage(null)}
            >
              <FiX size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
