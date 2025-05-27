import styles from './AboutUs.module.css';

export default function AboutUs() {
  const aboutData = {
    // Información estática sobre la empresa
    title: "SL Servicios Corporativos SC",
    description: "Es una firma boutique que brinda servicios altamente calificados, conformado por un clúster de Abogados y Contadores especializados en temas de Litigio Fiscal y Administrativo, Contabilidad Fiscal, Estrategias y Planeación corporativa enfocados en brindar a nuestros clientes valor a sus empresas para que logren una óptima productividad en sus compañías a través de consultoría, estrategias y defensa dentro del marco legal aplicable.",
    image: "SL Servicios Corporativos SC.png",
    buttonText: "MÁS INFORMACIÓN"
  };

  return (
    <section className={styles.descripcion}>
      {/* Imagen a la izquierda o superior (según diseño responsive) */}
      <img 
        src={`/IMG/${aboutData.image}`} 
        alt="Imagen descriptiva" 
        className={styles.image}
      />
      {/* Contenido textual y botón de acción */}
      <div className={styles.content}>
        <h2>{aboutData.title}</h2>
        <p>{aboutData.description}</p>
        <a href="#nosotros" className={styles.button}>
          {aboutData.buttonText}
        </a>
      </div>
    </section>
  );
}