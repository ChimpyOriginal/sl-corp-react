import styles from './TeamSlide.module.css';
// Componente funcional que representa una sección para presentar al equipo de trabajo.
export default function TeamSlide() {
  return (
    <section id="Trabajador-slide1" className={styles.trabajadorSlide}>
      <div className={styles.slidesBase}>
        <div className={styles.trabajadorContainer}>
          <div className={styles.imagenPersona}>
            <img
              src="\IMG\PNG- Lic Juan Jose Sosa de la Fuente 2.PNG"
              alt="Juan José Sosa de la Fuente"
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <h2 className={styles.titulo}>
                Personas que marcan la <span className="textoAmarillo">diferencia</span>
              </h2>
              <p className={styles.parrafo}>
                En SL Corp, cada integrante del equipo es parte fundamental del éxito. Contamos con profesionales altamente capacitados, comprometidos con la excelencia y apasionados por brindar soluciones que generan valor. Su experiencia, ética y calidad humana se reflejan en cada proyecto, impulsando siempre los mejores resultados.
              </p>
              {/* Enlace para ver más sobre el personal (lleva a la página de fuerza laboral con el slider) */}
              <a href="Fuerza-slider.html">CONOCER AL PERSONAL</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
