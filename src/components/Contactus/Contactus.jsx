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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    projectType: "",
    concreteGrade: "",
    projectLocation: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: `${countryCode} ${phone}`,
      enquiryType: formData.enquiryType,
      projectType: formData.projectType,
      concreteGrade: formData.concreteGrade,
      projectLocation: formData.projectLocation,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_179rowg",
        "template_g1e29yr",
        templateParams,
        "gN_pRX1X71ZdekkUh"
      );

      toast.success("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiryType: "",
        projectType: "",
        concreteGrade: "",
        projectLocation: "",
        message: "",
      });

      setPhone("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <section className={styles.contactSection}>
        {/* <div className={styles.overlay}>
          <h1 className={styles.title}>Contact Us</h1>
        </div> */}
      </section>
      <div className="standard-padding">
        <Map />

        <Row className={`rounded bg-white overflow-hidden ${styles.formBox}`}>
          <Col xxl={6} lg={12} className="p-0 d-none d-xxl-block">
            <Image
              src="/images/conatctusFormImg.avif"
              alt="Contact"
              width={700}
              height={700}
              className="w-100 h-100 object-fit-cover"
              unoptimized
            />
          </Col>

          <Col xxl={6} lg={12} className="p-md-5 p-3">
            <h2 className="fw-bold mb-2 heading2">Contact Us</h2>
            <p className="text-muted mb-4 desc">Have a query? Contact us anytime!</p>

            <Form onSubmit={handleSubmit}>
              <Row className={`mb-3 ${styles.gap}`}>
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

              <Row className={`mb-3 ${styles.gap}`}>
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
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Construction Project Quote">Construction Project Quote</option>
                      <option value="Renovation Work">Renovation Work</option>
                      <option value="Material Supply">Material Supply</option>
                      <option value="Partnership or Vendor Inquiry">Partnership or Vendor Inquiry</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Select
                      name="projectType"
                      value={formData.projectType}
                      className={styles.ContactFormControl}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Project Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Road / Infrastructure">Road / Infrastructure</option>
                      <option value="Foundation / Slab Work">Foundation / Slab Work</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Select
                      name="concreteGrade"
                      value={formData.concreteGrade}
                      className={styles.ContactFormControl}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Concrete Grade Required</option>
                      <option value="M20">M20</option>
                      <option value="M25">M25</option>
                      <option value="M30">M30</option>
                      <option value="M35">M35</option>
                      <option value="M40">M40</option>
                      <option value="M45">M45</option>
                      <option value="M50">M50</option>
                      <option value="Not Sure (Help me choose)">Not Sure (Help me choose)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="projectLocation"
                    className={styles.ContactFormControl}
                    placeholder="Project Location"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3 mt-3 mt-md-0">
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" className={styles.sendBtn} disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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