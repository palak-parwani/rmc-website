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
    { id: 3, value: 50, label: "DAILY PRODUCTION CAPACITY (CBM)" },
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
      text: "Every batch is produced using automated batching systems to ensure accurate mix proportions, uniform quality, and dependable strength.",
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
      text: "From grade selection and mix design to on-site slump testing and technical guidance, our experts support you throughout the concreting process.",
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
          <Col lg={6}>
            <h3 className={`heading2 ${styles.heading2}`}>About SuperTech ReadyMix Pvt. Ltd.</h3>
            <p className={`desc ${styles.desc2}`}>
              SuperTech ReadyMix Pvt. Ltd. is a leading ReadyMix Concrete (RMC) manufacturer,
              committed to delivering high-quality, durable, and precisely batched concrete
              solutions for residential, commercial, and industrial projects.

            </p>
            <p className={`desc ${styles.desc2}`}>
              {` With fully automated batching plants and strict quality control processes,
we produce a wide range of concrete grades from M20 to M50, ensuring consistency,
strength, and superior performance across all structural applications.`}
            </p>
            <p className={`desc ${styles.desc2}`}>
              Backed by experienced engineers, modern transit mixers, and a customer-first
              approach, we have earned the trust of builders, contractors, and developers
              through reliable supply, technical expertise, and on-time delivery.
            </p>

          </Col>

          <Col md={6} className="d-md-none d-none d-lg-block">
            <img src="/images/contactusBanner.jpg" alt="about" className="w-100 h-100" />
          </Col>
        </Row>
      </div>

      {/* Mission, Vision, Values */}
      <div className="standard-padding">
        <h3 className={`heading2 ${styles.heading}`}>Our Mission, Vision & Core Values</h3>
        <p className={`desc mb-4 mb-md-3 ${styles.desc}`}>Built on Purpose. Driven by Vision. Guided by Values.</p>

        <Row>
          <Col md={4}>
            <div className={styles.cardBox}>
              <div className={`${styles.iconCircle} ${styles.red}`}>
                <img src="/images/mission.png" alt="" className={styles.icon} />
              </div>
              <h3 className={styles.title}>MISSION</h3>
              <p className={styles.text}>
                To manufacture and supply high-quality ReadyMix Concrete with precision,
                reliability, and efficiency — ensuring strong, safe, and sustainable structures for the future.
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
                To become a leading ReadyMix Concrete provider by adopting advanced
                production technologies, sustainable practices, and uncompromising
                quality standards across every project we serve.
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
                Quality, reliability, transparency, and customer commitment form the
                foundation of our values. We believe in ethical practices, strong
                partnerships, and consistent performance on every site.
              </p>

            </div>
          </Col>
        </Row>
      </div>

      {/* Impact Section */}
      <div className="standard-padding" ref={statsRef}>
        <h2 className={`heading2 ${styles.heading}`}>Our Impact</h2>
        <p className={`desc mb-4 mb-md-3 ${styles.desc}`}>Building trust through quality work — our numbers tell the story.</p>

        <div className={styles.statsContainer}>
          <Row className="text-center">
            {stats.map((item, index) => (
              <Col
                xxl={3} lg={6} md={6} sm={12}
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
          <h2 className={`heading2 ${styles.heading}`}>Why Choose Us</h2>
          <p className={`desc mb-4 mb-md-3 ${styles.desc}`}>
            Your trusted partner for reliable and high-quality ReadyMix Concrete solutions.
          </p>
        </div>

        <Row className="gy-4">
          {features.map((item, index) => (
            <Col xxl={3} lg={6} md={6} sm={12} key={index}>
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
