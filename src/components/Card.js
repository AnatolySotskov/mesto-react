function Card({ onCardClick, data }) {
  const handleCardClick = () => {
    onCardClick(data);
  };

  return (
    <article className="card">
      <img
        className="card__photo"
        src={data.link}
        alt={data.name}
        onClick={handleCardClick}
      />
      <div className="card__content">
      <h2 className="card__title">{data.name}</h2>
      <div className="card__like-block">
        <button className="card__like" type="button"></button>
        <p className="card__like-count"></p>
      </div>
      <button className="card__delete-button" type="button"></button>
      </div>
      
    </article>
  );
}

export default Card;
