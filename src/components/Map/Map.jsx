import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBusinessTime, FaPhoneAlt, FaRegAddressCard } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import styles from '../Contactus/Contactus.module.css'
import { IoLocationSharp } from 'react-icons/io5';

const Map = () => {
  return (
    <>
      <div className="mt-md-5 mt-0">
        <div className={styles.header}>
          <h2 className="heading2">Get In Touch With Us</h2>
          <p className="desc">Expert support from consultation to concrete delivery.</p>
        </div>

        <Row className="g-3 align-items-stretch">
          <Col xxl={6} lg={12}>
            <div className={styles.mapContainer}>
              {/* <iframe
                title="Jaipur–Ajmer National Highway Location"
                src="https://www.google.com/maps?q=Jaipur+Ajmer+National+Highway+Near+Vrindavan+Greens+Sarangpura+Jaipur+Rajasthan+302026&output=embed"
                width="100%"
                height="244"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe> */}
              <iframe
                title="SUPERTECH READYMIX PRIVATE LIMITED"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5290345987432!2d75.64007417489302!3d26.85492806257238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b2c9d2baf3b%3A0xcafe6875c8d1b588!2sSUPERTECH%20READYMIX%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1770456999719!5m2!1sen!2sin"
                width="100%"
                height="310"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


            </div>
          </Col>
          <Col xxl={6} lg={12}>
            <div className={styles.infoContainer}>
              <Row className="g-3 align-items-stretch">
                <Col md={6}>
                  <div className={styles.infoBox}>
                    <div className='d-flex gap-2 align-items-center'>
                      <div className={styles.iconWrapper}>
                        <FaPhoneAlt className={styles.icon} />
                      </div>
                      <h4>Call Support</h4>
                    </div>
                    <div className={styles.textcontact}>
                      <p className={`desc ${styles.desc}`}>
                        <a href="tel:+919829268506">+91 9829268506</a>,<br />
                        <a href="tel:+919660029530">+91 9660029530</a>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={styles.infoBox}>
                    <div className='d-flex gap-2 align-items-center'>
                      <div className={styles.iconWrapper}>
                        <MdEmail className={styles.icon} />
                      </div>
                      <h4>Email Support</h4>
                    </div>
                    <div className={styles.textcontact}>
                      <p><a href="mailto:supertechreadymix@gmail.com">supertechreadymix@gmail.com</a></p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-3 align-items-stretch">
                <Col md={6}>
                  <div className={styles.infoBox}>
                    <div className='d-flex gap-2 align-items-center'>
                      <div className={styles.iconWrapper}>
                        <IoLocationSharp className={styles.icon} />
                      </div>
                      <h4>Office Address</h4>
                    </div>
                    <div className={styles.textcontact}>
                      <p>Jaipur–Ajmer National Highway, Near Vrindavan Greens, Sarangpura, Jaipur, Rajasthan 302026</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.infoBox}>
                    <div className='d-flex gap-2 align-items-center'>
                      <div className={styles.iconWrapper}>
                        <FaBusinessTime className={styles.icon} />
                      </div>

                      <h4>Office Hours</h4>
                    </div>
                    <div className={styles.textcontact}>
                      <p>Available 24Hrs for all inquiries.</p>
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