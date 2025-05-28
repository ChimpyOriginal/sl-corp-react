// Importamos el hook useState para controlar el estado del menú móvil
import { useState } from 'react'
import styles from './Header.module.css'
// Importamos íconos del menú hamburguesa y cerrar
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
    // Estado local para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lista de elementos del menú. Cada elemento tiene un nombre, una ruta y un estado activo.
  const menuItems = [
    { name: 'Inicio', path: '/', active: true },
    { name: 'Nosotros', path: '#nosotros' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Fuerza laboral', path: '/equipo' },
    { name: 'Contacto', path: '#contacto' },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="/IMG/SL CORP LOGO BLANCO.png" alt="SL Corp Logo" />
          SL Corp
        </div>
        {/* Botón hamburguesa (aparece en móviles) */}
        <button className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Lista de navegación. Se muestra u oculta en función de isMenuOpen */}
        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={item.active ? styles.active : ''}
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

