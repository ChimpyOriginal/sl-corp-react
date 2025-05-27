import styles from './ServicesOverview.module.css';
// Componente funcional que muestra una visión general de los servicios ofrecidos
export default function ServicesOverview() {
  // Datos de los servicios: cada uno con título, imagen y descripción.
  // Esta estructura permite mantener el código limpio y fácilmente escalable.
  const servicesData = [
    {
      id: 1,
      title: "Más de 40 años de experiencia",
      image: "Años de experiencia.png",
      description: "Estamos conformados por un grupo de especialistas en el ramo contable y fiscal"
    },
    {
      id: 2,
      title: "Estrategias personalizadas",
      image: "Estrategias personalizadas.png",
      description: "Ofrecemos estrategias personalizadas para prevenir riesgos legales"
    },
    {
      id: 3,
      title: "Diseñamos tu modelo operativo",
      image: "Modelo operativo.png",
      description: "Exploramos alternativas fuera del Sistema Financiero Nacional e Internacional"
    }
    // Para agregar más servicios, simplemente añadir más objetos al array con un nuevo ID, título, imagen y descripción.
  ];

  return (
    <>
      {/* Sección de texto */}
      <section className={styles.materiaFiscCorp}>
        <h2>Servicios en materia <span className="textoAmarillo">fiscal y corporativa</span></h2>
        <p>
          Nuestros servicios especializados están dirigidos a proporcionar consultoría y soluciones personalizadas 
          en los ámbitos: legales, fiscales, contables, financieros y administrativos a los empresarios que requieran 
          el servicio en los estados de Tabasco, Ciudad de México, Campeche, Chiapas, Veracruz, Yucatán, Quintana Roo 
          y Nuevo León y también se cuenta con una alianza estratégica para dar servicios en EUA.
        </p>
      </section>

       {/* Sección que muestra los servicios como tarjetas en fila */}
      <section className={styles.contenedorFilas}>
        {/* Iteramos sobre cada servicio y renderizamos una tarjeta con su información */}
        {servicesData.map((service) => (
          <div key={service.id} className={styles.fila}>
            <h2>{service.title}</h2>
            <img 
              src={`/IMG/${service.image}`} // Ruta relativa desde la carpeta public/IMG
              alt={service.title} 
              className={styles.filaImg}
            />
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}