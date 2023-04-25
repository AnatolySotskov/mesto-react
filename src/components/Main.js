import avatar from "../images/kusto.jpg";
import api from "../utils/api";
import { useEffect, useState } from "react";


function Main({ onEditProfile }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInfoUser()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-block">
          <img className="profile__avatar" src={userAvatar} alt="Жак Кусто" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>

      <section className="cards">
        {/* <!-- ШАБЛОН КАРТОЧЕК ИЗ ТЕМПЛЕЙТА --> */}
      </section>
    </main>
  );
}

export default Main;
