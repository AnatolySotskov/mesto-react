import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  
 

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  // const handleCardClick = () => setIsViewPopupOpen(true);
  
  const handleCardClick = (props) => {
    setSelectedCard(props);
    setIsViewPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsViewPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      {/* <!-- ПОПАП РЕДАКТИРОВАТЬ ПРОФИЛЬ --> */}
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="nameProfile-input"
          name="name"
          type="text"
          className="popup__input popup__input_name_profile-name"
          placeholder="Введите имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error nameProfile-input-error"></span>

        <input
          id="textProfile-input"
          name="about"
          type="text"
          className="popup__input popup__input_name_profile-description"
          placeholder="Введите описание"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error textProfile-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="nameMesto-input"
          name="name"
          type="text"
          className="popup__input popup__input_name_photo-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error nameMesto-input-error"></span>

        <input
          id="urlMesto-input"
          name="link"
          type="url"
          className="popup__input popup__input_name_url-photo"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error urlMesto-input-error"></span>
      </PopupWithForm>

      {/* <!-- ПОПАП ОТКРЫТИЕ КАРТОЧКИ --> */}
      {/* <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <img className="popup__image" src="#" alt="#" />
          <button type="button" className="popup__button-close"></button>
          <h2 className="popup__title popup__title_type_image"></h2>
        </div>
      </div> */}

      <ImagePopup
        isOpen={isViewPopupOpen}
        name="view"
        card={selectedCard}
        onClose={closeAllPopups}
      />





      {/* <!--ПОПАП ПОДТВЕРЖДЕНИЯ УДАЛЕНИЕ ФОТО--> */}
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button type="button" className="popup__button-close"></button>
          <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
          <form
            action="#"
            className="popup__form popup__form-delete"
            name="popup-delete-card"
            noValidate
          >
            <button type="submit" className="popup__button-save">
              Да
            </button>
          </form>
        </div>
      </div>

      {/* <!-- ПОПАП ЗАМЕНЫ АВАТАРА --> */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input
              id="avatar"
              type="url"
              name="avatar"
              className="popup__input popup__input_avatar_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error avatar-error"></span>
        </PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
