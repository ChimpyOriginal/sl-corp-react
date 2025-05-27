import styles from './Testimonials.module.css';

// Componente funcional que muestra la sección de testimonios de clientes.
export default function Testimonials() {
  // Lista de testimonios de clientes (actualmente codificados manualmente).
  // Podrían venir de una API o de un archivo JSON externo.
  const testimonials = [
    {
      id: 1,
      name: "Carlos Gómez",
      location: "León, Gto.",
      comment: "Excelente servicio, resolvieron mi caso de manera rápida y eficiente. Los recomiendo ampliamente."
    },
    {
      id: 2,
      name: "María García",
      location: "Monterrey",
      comment: "Muy profesionales y atentos. Me sentí acompañada durante todo el proceso. ¡Gracias!"
    },
    {
      id: 3,
      name: "Carlos López",
      location: "Guadalajara",
      comment: "Su asesoría fue clave para el éxito de mi empresa. Un equipo altamente capacitado."
    }
    // Para agregar más testimonios, simplemente añade más objetos al array con un nuevo ID y sus respectivos datos.
  ];

  return (
    // Sección que contiene todo el bloque de testimonios
    <section className={styles.testimonials}>
      <h2>Nuestros clientes <span className="textoAmarillo">satisfechos</span></h2>
      <p>Nuestro enfoque y cultura de servicio al cliente nos deja como resultado clientes satisfechos.</p>
      
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <div className={styles.client}>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.location}</span>
            </div>
            <p>"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}