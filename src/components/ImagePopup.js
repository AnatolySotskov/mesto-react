function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_visible"
      }`}
      onClick={props.onClose}
    >
      <div
        className="popup__container_type_image"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__title_type_image">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
