import { Link } from 'react-router-dom';

export default function TeamCard({ member }) {
  return (
    <div className="member-card hover-effect">
      <div className="member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p className="bio">{member.bio1}</p>
        <Link to={`/member/${member.id}`}>
          <button className="action-btn">Conoce más</button>
        </Link>
      </div>
    </div>
  );
}
