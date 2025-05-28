# SL Corp - Sitio Web Corporativo  

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-yellow)](https://vitejs.dev/)

Sitio web oficial de SL Corp desarrollado con React y Vite. Ofrece información sobre servicios fiscales y corporativos.

## Características principales  
- Estructura modular con componentes reutilizables  
- Diseño intuitivo y responsivo  
- Conexión a datos dinámicos mediante JSON Server  
- Efectos interactivos con React Hooks  

## Descripción del Funcionamiento
Este sitio web corporativo está desarrollado utilizando React de forma modular. Cada sección del sitio (por ejemplo, el hero, los servicios, la misión y visión, entre otras) está encapsulada dentro de componentes reutilizables, lo que facilita el mantenimiento, la escalabilidad y la organización del código.

La información dinámica, como los servicios ofrecidos por la empresa, se obtiene mediante una petición fetch a un archivo JSON simulado con JSON Server. Esta separación entre los datos y la lógica de presentación permite modificar el contenido fácilmente sin tener que tocar el código de los componentes.

La interfaz es responsiva, adaptándose correctamente a distintos tamaños de pantalla. En dispositivos móviles, la navegación incluye un menú tipo hamburguesa implementado con el hook useState para manejar su visibilidad de forma interactiva.

Además, se emplearon hooks como useEffect para cargar datos dinámicos y manejar efectos secundarios dentro de los componentes, y se estructuró el proyecto siguiendo buenas prácticas de organización de carpetas, estilos y lógica de negocio.


## Tecnologías utilizadas  
- **Frontend**: React 18 + Vite  
- **Estilos**: CSS Modules  
- **Íconos**: React Icons (Font Awesome)  
- **Mock API**: JSON Server  

##  Instalación  
1. Clona el repositorio:  
    ```bash
    git clone https://github.com/tu-usuario/sl-corp-react.git
    cd sl-corp-react
    ```

2. Instala dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```



## Estructura del proyecto
A continuación, se muestra la estructura del directorio del proyecto, destacando los archivos y carpetas clave:
```bash
mi-app-react/
├── data/
│   └── services.json                # Datos dinámicos simulados para JSON Server
├── node_modules/                    # Módulos de Node (generado por npm)
├── public/
│   └── IMG                          # Carpeta con las imágenes
├── src/
│   ├── components/                  # Componentes reutilizables
│   │   ├── AboutUs/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── MissionVision/
│   │   ├── ServiceCard/
│   │   ├── Services/
│   │   ├── ServicesOverview/
│   │   ├── TeamSlide/
│   │   └── Testimonials/
│   ├── pages/
│   │   └── Home/
│   ├── App.jsx                      # Componente raíz de la app
│   ├── main.jsx                     # Punto de entrada de React
│   ├── index.css                    # Estilos globales
├── .gitignore                       # Ignora node_modules, dist, etc.
├── index.html                       # HTML base para Vite
├── package.json                     # Configuración del proyecto y dependencias
├── vite.config.js                   # Configuración de Vite
└── README.md                        # Documentación del proyecto
```

## Conexión a Datos
La aplicación obtiene información dinámica (como los servicios ofrecidos) utilizando **fetch** para consumir datos desde un archivo JSON simulado con **JSON Server**. Esto permite separar la lógica de presentación de los datos, facilitando la actualización del contenido sin modificar los componentes.

**Pasos para simular la API:**
1. Instala JSON Server de forma global (si no lo tienes):
  ```bash
  npm install -g json-server
  ```
2. Ejecuta el servidor apuntando al archivo de datos:
  ```bash
  json-server --watch data/services.json --port 3000
  ```
3. Accede a los datos desde tu aplicación React usando:
  ```js
  fetch('http://localhost:3000/services')
    .then(response => response.json())
    .then(data => setServices(data));
  ```

Esto permite que los componentes de React consuman y muestren datos de manera dinámica, simulando una API real durante el desarrollo.


## Retos Enfrentados y Soluciones Implementadas
Este fue nuestro primer sitio web desarrollado con React, por lo que comenzamos con conocimientos muy básicos. Si bien ya teníamos una versión previa del sitio construida en HTML y CSS puro, la transición a JSX fue un desafío inicial. Afortunadamente, contar con experiencia previa en HTML/CSS facilitó la adaptación de nuestro código al formato JSX, ya que los conceptos fundamentales de estructura y estilo eran familiares.

Uno de los principales desafíos fue entender cómo se estructuran y conectan los archivos en un proyecto React. El concepto de componentes, así como el sistema de import y export, no era claro al principio. Sin embargo, a través de investigación y experimentación práctica, logramos comprender la arquitectura del proyecto y cómo mantener una estructura ordenada.

Otro reto importante fue la sección de servicios, donde intentamos trabajar con datos dinámicos utilizando JSON Server para practicar su uso. Aprender a manejar los React Hooks como useState y useEffect fue clave para lograr la carga y renderizado dinámico de los servicios desde un archivo JSON. Inicialmente, fue complejo entender cómo y cuándo se ejecutaban estos hooks, pero con práctica logramos integrarlos correctamente para simular una llamada a una API y dividir los datos en grupos visuales.

Gracias al proceso de prueba y error, al apoyo de la documentación en el curso y al hecho de tener un diseño base, pudimos superar estas barreras y completar el proyecto.







TeamSlider – Carrusel de Miembros del Equipo SL Corp


## Características principales  
- Estructura modular   
- Diseño intuitivo y responsivo  
- Conexión a datos dinámicos mediante JSON Server  
- Efectos interactivos con React Hooks
- Navegación a una página individual por miembro (`/member/:id`)
- Efectos interactivos con React Hooks  


## Descripción del Funcionamiento
El componente TeamSlider es un carrusel responsivo desarrollado con React que muestra dinámicamente tarjetas de miembros del equipo, cada una con su nombre, cargo y fotografía. Permite navegar a una página individual de detalles mediante React Router al hacer clic en un botón dentro de cada tarjeta. Está diseñado con estructura modular, buenas prácticas y estilos adaptables para funcionar correctamente en dispositivos móviles, tablets y pantallas grandes. Además, puede integrarse fácilmente en otras páginas como parte de una web corporativa, consumiendo datos desde un archivo JSON.



## Tecnologías utilizadas

- **React** – Biblioteca principal para construir la interfaz de usuario.
- **React Router** – Para la navegación entre páginas (Home, Slider, Detalles).
- **Vite** – Herramienta de desarrollo rápida y moderna para React.
- **CSS Modules** – Para estilos encapsulados y reutilizables.



##  Instalación  
1. Clona el repositorio:  
    ```bash
    git clone https://github.com/tu-usuario/sl-corp-react.git
    cd sl-corp-react
  
2. Instala dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
 

## Estructura del proyecto
A continuación, se muestra la estructura del directorio del proyecto, destacando los archivos y carpetas clave:
```bash
mi-app-react/
├── data/
│   └── services.json                # Datos dinámicos simulados para JSON Server
├── node_modules/                    # Módulos de Node (generado por npm)
├── public/
│   ├── IMG                          # Carpeta con las imágenes
│   ├── imgs                         # Carpeta con imágenes del equipo 
│   └── teamData.json                # Datos dinámicos JSON para slider   
│                 
├── src/
│   ├── components/                  # Componentes reutilizables
│   │   ├── AboutUs/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── MissionVision/
│   │   ├── ServiceCard/
│   │   ├── Layout/
│   │   ├── Services/
│   │   ├── ServicesOverview/
│   │   ├── TeamSlide/
│   │   ├── TeamSlider/
│   │   └── Testimonials/
│   ├── pages/
│   │   ├── Home/
│   │   └── TeamSliderPage/
│   ├── App.jsx                      # Componente raíz de la app
│   ├── main.jsx                     # Punto de entrada de React
│   ├── index.css                    # Estilos globales
├── .gitignore                       # Ignora node_modules, dist, etc.
├── index.html                       # HTML base para Vite
├── package.json                     # Configuración del proyecto y dependencias
├── vite.config.js                   # Configuración de Vite
└── README.md                        # Documentación del proyecto
```

## Conexión a Datos
La aplicación obtiene información dinámica (como los servicios ofrecidos) utilizando **fetch** para consumir datos desde un archivo JSON simulado con **JSON Server**. Esto permite separar la lógica de presentación de los datos, facilitando la actualización del contenido sin modificar los componentes.

**Pasos para simular la API:**
1. Instala JSON Server de forma global (si no lo tienes):
  ```bash
  npm install -g json-server
  ```
2. Ejecuta el servidor apuntando al archivo de datos:
  ```bash
  json-server --watch data/services.json --port 3000
  ```
3. Accede a los datos desde tu aplicación React usando:
  ```js
  fetch('http://localhost:3000/services')
    .then(response => response.json())
    .then(data => setServices(data));
  ```

Esto permite que los componentes de React consuman y muestren datos de manera dinámica, simulando una API real durante el desarrollo.


## Retos Enfrentados y Soluciones Implementadas
Este carrusel de equipo fue una de nuestras primeras experiencias trabajando con React de forma modular y estructurada. Uno de los principales retos fue organizar los componentes para que el slider conviviera dentro de una arquitectura escalable, manteniendo una buena separación de responsabilidades y un flujo de datos claro.

Implementar la navegación entre el carrusel principal y las páginas individuales para cada miembro del equipo también representó un desafío. Para resolverlo, integramos react-router-dom, lo cual nos permitió crear rutas dinámicas sin comprometer la estructura general del sitio. La solución incluyó configurar el componente principal (App.jsx) con un sistema de rutas que mantiene elementos globales como la barra de navegación y el pie de página visibles en todas las vistas.

Otro aspecto clave fue hacer que el slider fuera completamente responsivo. Utilizamos CSS modular y media queries para adaptar el diseño a todos los dispositivos, además de React Hooks como useState y useEffect para manejar los datos del equipo de manera dinámica, simulando una llamada a una API con un archivo JSON local.

A través de prueba y error, lectura de documentación y una base de diseño clara, logramos superar los desafíos técnicos y completar un componente atractivo, funcional y adaptable para futuros proyectos.





## Autores
Desarrollado por Maribel Paulina Sánchez Jiménez, Marcos Daniel Arias Cerino, José Antonio Arce Zabala y Gabriel Domínguez Gómez.

## Licencia
Este proyecto está bajo la licencia MIT.


#   P A G I N A - S L C O R - V 4 - R E A C T  
 