// Importamos hooks de React y un componente hijo para mostrar cada servicio
import { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Services.module.css";

export default function Services() {
    // Estado local para almacenar los servicios (vienen de una API o mock)
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Función para obtener los servicios desde un backend local (en este caso JSON Server)
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:3000/services"); // Endpoint local
        const data = await res.json();
        setServices(data); // Guardamos los datos obtenidos
      } catch (error) {
        console.error("Error:", error);
        // En caso de error, se usan datos simulados (mock) como respaldo
        setServices([
          {
            id: 1,
            title: "Servicios Contables y Fiscales",
            image: "Servicios Contables y Fiscales (2).jpg",
          },
          {
            id: 2,
            title: "Asesoría de Negocios y Financiamiento",
            image: "Asesoría de Negocios y Financiamiento.png",
          },
          {
            id: 3,
            title: "Medios de Defensa en Materia Fiscal",
            image: "Medios de Defensa en Materia Fiscal.png",
          },
          {
            id: 4,
            title: "Consultoría Fiscal y Financiera",
            image: "Consultoría Fiscal y Financiera.png",
          },
          {
            id: 5,
            title: "Productividad Fiscal",
            image: "Productividad Fiscal.png",
          },
          {
            id: 6,
            title: "Auditoría Financiera y Control Interno",
            image: "Auditoria Financiera y Control Interno.png",
          }
          // Se pueden agregar más servicios simulados aquí si es necesario
        ]);
      }
    };
    // Función de carga de servicios al montar el componente
    fetchServices();
  }, []);

    // Función para dividir un arreglo en subgrupos de tamaño fijo (en este caso, de 3 en 3)
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  // Agrupamos los servicios en filas de 3 para mostrar en tarjetas por fila
  const serviceGroups = chunkArray(services, 3);

  return (
    <section className={styles.serviceCards}>
      <h2>
        Nuestros <span className="textoAmarillo">Servicios</span>
      </h2>
      <p>
        SL Servicios Corporativos es una firma boutique que te brinda servicios
        altamente calificados, te mostramos algunos:
      </p>
      {/* Mapeamos los grupos de servicios para crear filas de tarjetas */}
      {serviceGroups.map((group, index) => (
        <div key={index} className={styles.tablaServicios}>
          {group.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
