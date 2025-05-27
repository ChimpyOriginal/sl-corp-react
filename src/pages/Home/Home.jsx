import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ServicesOverview from '../../components/ServicesOverview/ServicesOverview';
import AboutUs from '../../components/AboutUs/AboutUs';
import MissionVision from '../../components/MissionVision/MissionVision';
import Services from '../../components/Services/Services'; 
import TeamSlide from '../../components/TeamSlide/TeamSlide';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <AboutUs />
        <MissionVision /> 
        <Services /> {/* Sección de servicios con datos dinámicos */}
        <TeamSlide />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}