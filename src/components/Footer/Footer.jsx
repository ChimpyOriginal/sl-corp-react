import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';
// Componente funcional que representa el pie de página del sitio
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual para mostrar en el pie de página

  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {/* Iconos de redes sociales con enlaces externos */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      
      <p>{currentYear} © Copyright SL CORP</p> 
      <p>Diseño y desarrollo por Maribel Sánchez, Marcos Arias, José Arce y Gabriel Domínguez.</p>
    </footer>
  );
}