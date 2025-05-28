// src/components/Layout/Layout.jsx
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderiza el contenido de la ruta */}
      </main>
      <Footer />
    </>
  );
}
