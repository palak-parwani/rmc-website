import { FaClock, FaHandshake, FaHardHat, FaTools } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Aboutus.module.css";
import { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";

// Count-Up Hook
const useCountUp = (target, shouldStart, duration = 1500) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let current = 0;
    const stepTime = 10;
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(counter);
        setValue(target);
      } else {
        setValue(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [shouldStart, target, duration]);

  return value;
};

// FIX: Create component for counter (Hooks allowed inside components)
const StatCounter = ({ value, start }) => {
  const count = useCountUp(value, start);
  return <>{count}</>;
};

const Aboutus = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { id: 1, value: 300, label: "RMC LOADS DELIVERED" },
    { id: 2, value: 150, label: "CONTRACTORS SERVED" },
    { id: 3, value: 50, label: "DAILY MIXING CAPACITY (CBM)" },
    { id: 4, value: 25, label: "PROJECT PARTNERS" },
  ];

  // Start animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStartCount(true),
      { threshold: 0.3 }
    );
    statsRef.current && observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FaHardHat />,
      title: "Grade-Accurate Concrete",
      text: "Every batch is produced using automated batching technology, ensuring precise mix ratios and consistent strength.",
    },
    {
      icon: <FaTools />,
      title: "Superior Material Quality",
      text: "We use premium cement, tested aggregates, and certified admixtures to deliver durable, long-lasting concrete.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable On-Time Delivery",
      text: "With a fleet of modern transit mixers, we ensure smooth, uninterrupted delivery at your construction site.",
    },
    {
      icon: <FaClock />,
      title: "End-to-End Support",
      text: "From selecting the right grade to on-site slump testing, our team assists you at every stage of concrete placement.",
    },
  ];


  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className={styles.AboutSection}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>About Us</h1>
        </div>
      </section>

      {/* About Section */}
      <div className="standard-padding">
        <Row className="mt-5">
          <Col md={6}>
            <h3 className="heading2">About Us</h3>
            <p>
              We are a leading Ready-Mix Concrete (RMC) manufacturer committed to delivering
              high-quality, durable, and precisely batched concrete for residential, commercial,
              and industrial projects. Our fully automated batching systems ensure accuracy,
              consistency, and superior performance in every mix.
            </p>
            <p>
              {` With a strong focus on innovation, safety, and on-time delivery, we supply a wide 
              range of concrete grades from M20 to M50, designed to meet diverse structural needs. 
              Whether it's foundations, slabs, columns, or large-scale infrastructure, our RMC ensures 
              long-term strength and reliability.`}
            </p>
            <p>
              Backed by experienced engineers, certified quality processes, and modern transit mixers,
              we continue to serve builders, contractors, and developers with trust and excellence.
            </p>

          </Col>

          <Col md={6}>
            <img src="/images/contactusBanner.jpg" alt="about" className="w-100 h-100" />
          </Col>
        </Row>
      </div>

      {/* Mission, Vision, Values */}
      <div className="standard-padding">
        <h3 className="heading2">Our Mission, Vision & Core Values</h3>
        <p className="desc">Built on Purpose. Driven by Vision. Guided by Values.</p>

        <Row>
          <Col md={4}>
            <div className={styles.cardBox}>
              <div className={`${styles.iconCircle} ${styles.red}`}>
                <img src="/images/mission.png" alt="" className={styles.icon} />
              </div>
              <h3 className={styles.title}>MISSION</h3>
              <p className={styles.text}>
                To manufacture and supply high-quality Ready-Mix Concrete with precision,
                reliability, and efficiency — ensuring strong, long-lasting structures for every project.
              </p>

            </div>
          </Col>

          <Col md={4}>
            <div className={styles.cardBox}>
              <div className={`${styles.iconCircle} ${styles.blue}`}>
                <img src="/images/vission.png" alt="" className={styles.icon} />
              </div>
              <h3 className={styles.title}>VISION</h3>
              <p className={styles.text}>
                To become the most trusted and innovative RMC provider by adopting advanced
                production technologies, sustainable practices, and superior quality standards.
              </p>

            </div>
          </Col>

          <Col md={4}>
            <div className={styles.cardBox}>
              <div className={`${styles.iconCircle} ${styles.yellow}`}>
                <img src="/images/value.png" alt="" className={styles.icon} />
              </div>
              <h3 className={styles.title}>VALUES</h3>
              <p className={styles.text}>
                Quality, reliability, transparency, and customer-centric service define our foundation.
                We value strong relationships, ethical practices, and consistent performance.
              </p>

            </div>
          </Col>
        </Row>
      </div>

      {/* Impact Section */}
      <div className="standard-padding" ref={statsRef}>
        <h2 className="heading2">Our Impact</h2>
        <p className="desc">Building trust through quality work — our numbers tell the story.</p>

        <div className={styles.statsContainer}>
          <Row className="text-center">
            {stats.map((item, index) => (
              <Col
                md={3}
                key={item.id}
                className={`${styles.colBox} ${index !== 0 ? styles.borderLeft : ""}`}
              >
                <h1 className={styles.number}>
                  <StatCounter value={item.value} start={startCount} />+
                </h1>
                <p className={styles.label}>{item.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="standard-padding">
        <div className={styles.header}>
          <h2 className="heading2">Why Choose Us</h2>
          <p className="desc">
            Your trusted partner for reliable and high-quality construction services.
          </p>
        </div>

        <Row className="gy-4">
          {features.map((item, index) => (
            <Col md={3} key={index}>
              <div className={styles.cardBox2}>
                <div className={styles.icon2}>{item.icon}</div>
                <h4 className={styles.title2}>{item.title}</h4>
                <p className={styles.text2}>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
