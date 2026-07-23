import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918103326129"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-floating"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;