import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919829268506?text=Hello%20I%20want%20to%20enquire%20about%20ReadyMix%20Concrete"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
    >
      <FaWhatsapp className={styles.icon}/>
    </a>
  );
}
