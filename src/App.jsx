// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TeamSlider from './components/TeamSlider/TeamSlider'; // Asegúrate de que la ruta es correcta
import MemberDetail from './components/TeamSlider/MemberDetail'
import Layout from './components/Layout/Layout'; // Importa el layout


function App() {
  return (
    <Router>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipo" element={<TeamSlider />} />
          <Route path="/member/:id" element={<MemberDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
