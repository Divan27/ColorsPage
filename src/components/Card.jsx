function Card({ title, category }) {

  return (

    <div className="music-card">

      <div className="card-image"></div>

      <div className="card-content">

        <h3>{title}</h3>

        <p>{category}</p>

      </div>

    </div>

  );
}

export default Card;