import { useEffect, useState, useRef } from 'react';
import TeamCard from './TeamCard';

export default function TeamSlider() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // ahora dinámico
  const sliderViewportRef = useRef(null);
  const gap = 24;

  useEffect(() => {
    fetch('/teamData.json')
      .then((res) => res.json())
      .then(setTeamMembers);
  }, []);

  // Ajustar visibleCards según ancho de ventana
  useEffect(() => {
    function updateVisibleCards() {
      const width = window.innerWidth;
      if (width < 480) setVisibleCards(1);
      else if (width < 768) setVisibleCards(1); // o 2 si quieres tablets
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    }

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const cardWidth = sliderViewportRef.current
    ? (sliderViewportRef.current.offsetWidth - gap * (visibleCards - 1)) / visibleCards
    : 0;

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= teamMembers.length - visibleCards ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? teamMembers.length - visibleCards : prev - 1
    );
  };

  const goTo = (i) => setCurrentIndex(i);

  return (
    <div className="team-slider-container">
      <div className="slider-header">
        <h2>
          NUESTRO <span>EQUIPO</span>
        </h2>
        <p>Profesionales especialistas en cada una de sus materias.</p>
      </div>

      <div className="slider-wrapper">
        <button className="nav-btn prev-btn" onClick={prev}>
          ←
        </button>
        <div
          className="slider-viewport"
          ref={sliderViewportRef}
          style={{ width: '100%' }}
        >
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                className={`slide ${
                  idx >= currentIndex && idx < currentIndex + visibleCards
                    ? 'visible'
                    : ''
                }`}
                key={member.id}
                style={{ width: `${cardWidth}px`, flex: '0 0 auto' }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
        <button className="nav-btn next-btn" onClick={next}>
          →
        </button>
      </div>

      <div className="slider-dots">
        {Array.from({ length: teamMembers.length - visibleCards + 1 }).map(
          (_, i) => (
            <button
              key={i}
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir a la slide ${i + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}
