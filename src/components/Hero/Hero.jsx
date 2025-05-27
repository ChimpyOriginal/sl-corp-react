import styles from './Hero.module.css';
// Componente funcional que representa la sección principal del sitio (hero/banner)
export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Contenedor del texto principal */}
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            SL CORP ofrece servicios tributarios <br />
            <span className="textoAmarillo">especializados</span>
          </h1>
        </div>
      </div>
    </section>
  );
}