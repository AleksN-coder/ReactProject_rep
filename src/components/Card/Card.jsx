import './Card.css'; 

function Card({ name, job, hobby, avatar }) {
  return (
    <div className="card">
      <img className="card-avatar" src={avatar} alt="User avatar" />
      <h2 className="card-name">{name}</h2>
      <p className="card-job">Род деятельности: {job}</p>
      <p className="card-hobby">Хобби: {hobby}</p>
    </div>
  );
}

export default Card;