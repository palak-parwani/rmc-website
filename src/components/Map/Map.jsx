import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBusinessTime, FaPhoneAlt, FaRegAddressCard } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import styles from '../Contactus/Contactus.module.css'

const Map = () => {
  return (
    <>
    <div className="mt-5">
          <div className={styles.header}>
            <h2 className="heading2">Get In Touch With Us</h2>
            <p className="desc">Your Project, Our Passion – Let’s Talk</p>
          </div>

          <Row className="g-3 align-items-stretch">
            <Col md={6}>
              <div className={styles.mapContainer}>
                <iframe
                  title="Jaipur Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14223.6805977445!2d75.772043!3d26.912433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40b8a8a6a8b%3A0x25e75e1d9e0a2d7c!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1731171729000!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0, height: "244px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.infoContainer}>
                <Row className="g-3 align-items-stretch">
                  <Col md={6}>
                    <div className={styles.infoBox}>
                      <div className={styles.iconWrapper}>
                        <FaPhoneAlt className={styles.icon} />
                      </div>
                      <div>
                        <h4>Call Support</h4>
                        <p>+91 9876543234</p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className={styles.infoBox}>
                      <div className={styles.iconWrapper}>
                        <MdEmail className={styles.icon} />
                      </div>
                      <div>
                        <h4>Email Support</h4>
                        <p>construction@gmail.com</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-3 align-items-stretch">
                  <Col md={6}>
                    <div className={styles.infoBox}>
                      <div className={styles.iconWrapper}>
                        <FaRegAddressCard className={styles.icon} />
                      </div>
                      <div>
                        <h4>Office Address</h4>
                        <p>abc, abc, jaipur, rajasthan, 302033 </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.infoBox}>
                      <div className={styles.iconWrapper}>
                        <FaBusinessTime className={styles.icon} />
                      </div>
                      <div>
                        <h4>Office Hours</h4>
                        <p>Available 10:00 AM – 8:00 PM for all inquiries.</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
    </>
  )
}

export default Map