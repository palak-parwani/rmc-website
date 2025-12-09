import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210" // <-- replace with YOUR WHATSAPP NUMBER
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
    >
      <FaWhatsapp className={styles.icon}/>
    </a>
  );
}
