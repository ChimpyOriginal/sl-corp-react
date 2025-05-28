import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaArrowLeft } from 'react-icons/fa';
import './MemberDetail.css';

export default function MemberDetail() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    fetch('/teamData.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.id === id);
        setMember(found);
      });
  }, [id]);

  if (!member) return <p className="loading">Cargando...</p>;

  return (
    <div className="member-detail-wrapper">
      <div className="member-detail">
        <div className="detail-header">
          <img src={member.image} alt={member.name} className="detail-photo" />
          <div className="detail-text">
            <h1>{member.name}</h1>
            <h2>{member.role}</h2>
            <p className="bio">{member.bio}</p>

            {member.specialties && (
              <div className="specialties">
                <h4>Especialidades</h4>
                <ul>
                  {member.specialties.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            <button className="contact-button">Solicitar consulta</button>
            {/* El siguiente Link regresa a la página principal del equipo */}
            <Link to="/equipo" className="back-button">
              <FaArrowLeft /> Volver al equipo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
