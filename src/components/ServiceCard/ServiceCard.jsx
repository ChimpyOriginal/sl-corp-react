import styles from './ServiceCard.module.css';

// Componente reutilizable que recibe props: título e imagen de un servicio
export default function ServiceCard({ title, image }) {
  return (
    <div className={styles.servicio}>
      <img 
        src={`/IMG/${image}`} // Ruta relativa desde carpeta /public/IMG
        alt={title}           // Buenas prácticas de accesibilidad
        className={styles.servicioImg}
      />
      <h3>{title}</h3>
      {/* Botón con enlace hacia la sección de servicios */}
      <a className={styles.botonServicio} href="#servicios">
        MÁS INFORMACIÓN
      </a>
    </div>
  );
}