'use client';

import { useState } from "react";
import { Modal, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./ContactModal.module.css";

export default function ContactModal({ show, onHide }) {

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    enquiryType: "",
    projectType: "",
    concreteGrade: "",
    projectLocation: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      backdrop={true}
      keyboard={true}
      className={styles.modalWrapper}
    >
      <div className={styles.modalCard}>

        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onHide}>
          ✕
        </button>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Request a Callback</h2>
          <p className={styles.subtitle}>
            Share your project details and our RMC experts will contact you soon.
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={handleSubmit} className={styles.formArea}>

          {/* FIRST NAME & LAST NAME  */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name*"
                className={styles.formControl}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Col>

            <Col md={6}>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className={styles.formControl}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          {/* EMAIL & PHONE */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email*"
                className={styles.formControl}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>

            <Col md={6}>
              <InputGroup>
                {/* Country Code */}
                <Form.Control
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className={styles.codeBox}
                />

                {/* Phone */}
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone Number*"
                  className={styles.formControl}
                  style={{ borderRadius: "0px", borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </InputGroup>
            </Col>
          </Row>

          {/* ENQUIRY TYPE & PROJECT TYPE */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Select
                name="enquiryType"
                className={styles.formControl}
                value={formData.enquiryType}
                onChange={handleChange}
                required
              >
                <option value="">Enquiry Type*</option>
                <option value="General">General Inquiry</option>
                <option value="Construction Quote">Construction Project Quote</option>
                <option value="Material Supply">Material Supply / RMC</option>
                <option value="Partnership">Partnership / Vendor Inquiry</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <Form.Select
                name="projectType"
                className={styles.formControl}
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Project Type*</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Infrastructure">Road / Infrastructure</option>
                <option value="Foundation">Foundation / Slab Work</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Col>
          </Row>

          {/* CONCRETE GRADE & LOCATION */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Select
                name="concreteGrade"
                className={styles.formControl}
                value={formData.concreteGrade}
                onChange={handleChange}
                required
              >
                <option value="">Concrete Grade Required*</option>
                <option value="M20">M20</option>
                <option value="M25">M25</option>
                <option value="M30">M30</option>
                <option value="M35">M35</option>
                <option value="M40">M40</option>
                <option value="M45">M45</option>
                <option value="M50">M50</option>
                <option value="Not Sure">Not Sure (Help me choose)</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <Form.Control
                type="text"
                name="projectLocation"
                placeholder="Project Location*"
                className={styles.formControl}
                value={formData.projectLocation}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          {/* MESSAGE */}
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Message..."
            className={`${styles.formControl} mb-3`}
            value={formData.message}
            onChange={handleChange}
          />

          {/* SUBMIT BUTTON */}
          <Button type="submit" className={styles.submitBtn}>Submit</Button>

        </Form>
      </div>
    </Modal>
  );
}
