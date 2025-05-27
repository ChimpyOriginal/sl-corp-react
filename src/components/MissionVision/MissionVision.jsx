import styles from './MissionVision.module.css';
// Componente funcional que muestra el propósito y la visión de la empresa
export default function MissionVision() {
  return (
    <section className={styles.propositoVision}>
      {/* Imagen de fondo */}
      <div className={styles.backgroundImage}></div>
      
      {/* Contenedor de texto superpuesto a la imagen */}
      <div className={styles.content}>
        {/* Sección de Propósito */}
        <h2>Nuestro <span className="textoAmarillo">Propósito</span></h2>
        <p>
          Aquí es donde comienza nuestro viaje. Conoce nuestro negocio y lo que hacemos. 
          Estamos comprometidos con la calidad y el excelente servicio. Únete a nosotros 
          mientras crecemos y triunfamos juntos. Nos alegra que estés aquí para ser parte 
          de nuestra historia.<br></br><br></br>
        </p>

        {/* Sección de Visión */}
        <h2><br></br>Nuestra <span className="textoAmarillo">Visión</span></h2>
        <p>
          Ofrecer un servicio de alta calidad a través de la consultoría fiscal y defensa 
          especializada en materia administrativa, laboral, seguridad social, mercantil y 
          societaria, dando soluciones integrales a las necesidades de nuestros clientes. 
          El equipo de SL CORP está constantemente actualizándose, manteniendo un alto grado 
          de especialización en los servicios, logrando que nuestros clientes estén plenamente 
          satisfechos con la calidad y eficiencia de los resultados obtenidos.
        </p>
      </div>
    </section>
  );
}