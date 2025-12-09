import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Contactus.module.css";
import {
  FaBusinessTime,
  FaPhoneAlt,
  FaRegAddressCard,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Col, InputGroup, Row } from "react-bootstrap";
import { Container, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91",
    enquiryType: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const handleCodeChange = (e) => {
    let val = e.target.value;
    // Always ensure "+" is at start
    if (!val.startsWith("+")) val = "+" + val.replace(/^\+*/, "");
    setCountryCode(val);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };
  return (
    <>
      <Navbar />

      <section className={styles.contactSection}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
      </section>
      <div className="standard-padding">
        <Map />

        <Row className={`rounded bg-white overflow-hidden ${styles.formBox}`}>
          <Col md={6} className="p-0">
            <Image
              src="/images/conatctusFormImg.avif"
              alt="Contact"
              width={700}
              height={700}
              className="w-100 h-100 object-fit-cover"
              unoptimized
            />
          </Col>

          <Col md={6} className="p-5">
            <h2 className="fw-bold mb-2 heading2">Contact Us</h2>
            <p className="text-muted mb-4 desc">Have a query? Contact us anytime!</p>

            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    className={styles.ContactFormControl}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="lastName"
                    className={styles.ContactFormControl}
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    className={styles.ContactFormControl}
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <InputGroup className={styles.ContactFormControl}>
                      {/* Editable prefix */}
                      <Form.Control
                        type="text"
                        value={countryCode}
                        onChange={handleCodeChange}
                        aria-label="Country Code"
                        style={{
                          maxWidth: "60px",
                          textAlign: "center",
                          padding: "0",
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                      />

                      {/* Main phone input */}
                      <Form.Control
                        type="text"
                        className={styles.ContactFormControl2}
                        placeholder="Phone Number*"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        aria-label="Phone Number"
                        style={{
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Select
                      name="enquiryType"
                      value={formData.enquiryType}
                      className={styles.ContactFormControl}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Enquiry Type</option>
                      <option value="General">General Inquiry</option>
                      <option value="Support">Construction Project Quote</option>
                      <option value="Feedback">Renovation Work</option>
                      <option value="Feedback">Material Supply</option>
                      <option value="Feedback">Partnership / Vendor Inquiry</option>
                      <option value="Feedback">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>  
                  <Form.Group className="mb-3">
                <Form.Select
                  name="Project Type"
                  value={formData.ProjectType}
                  className={styles.ContactFormControl}
                  onChange={handleChange}
                  required
                >
                  <option value="">Project Type</option>
                  <option value="General">Residential</option>
                  <option value="Support">Commercial</option>
                  <option value="Feedback">Industrial</option>
                  <option value="Feedback">Road / Infrastructure</option>
                  <option value="Feedback">Foundation / Slab Work</option>
                  <option value="Feedback">Other</option>
                </Form.Select>
              </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Select
                      name="Concrete Grade Required"
                      value={formData.enquiryType}
                      className={styles.ContactFormControl}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Concrete Grade Required</option>
                      <option value="General">M20</option>
                      <option value="Support">M25</option>
                      <option value="Feedback">M30</option>
                      <option value="Feedback">M35</option>
                      <option value="Feedback">M40</option>
                      <option value="Feedback">M45</option>
                      <option value="Feedback">M50</option>
                      <option value="Feedback">Not Sure (Help me choose)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>  
                  <Form.Control
                    type="text"
                    name="Project Location"
                    className={styles.ContactFormControl}
                    placeholder="Project Location"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className={styles.sendBtn}>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Contactus;
