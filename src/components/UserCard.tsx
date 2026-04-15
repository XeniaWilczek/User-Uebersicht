import "./UserCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCakeCandles,
  faEnvelope,
  faGlobe,
  faPhone,
  faTrash,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
function UserCard() {
  return (
    <>
      <div className="user-card">
        <div className="user-card__left-container">
          <img className="user-card__image" src="/images/user.jpg" alt="user" />
        </div>
        <div className="user-card__right-container">
          <div className="upper-div">
            <span className="upper-div__username">Name</span>
            <button className="upper-div__delete-button">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <div className="lower-div">
            <span className="lower-div__user-attributes">
              <FontAwesomeIcon icon={faCakeCandles} />
              Geburtsdatum
            </span>
            <span className="lower-div__user-attributes">
              <FontAwesomeIcon icon={faVenusMars} />
              Geschlecht
            </span>
            <span className="lower-div__user-attributes">
              <FontAwesomeIcon icon={faAddressBook} />
              Anschrift
            </span>
            <span className="lower-div__user-attributes">
              <FontAwesomeIcon icon={faEnvelope} />
              E-Mail
            </span>
            <span className="lower-div__user-attributes">
              <FontAwesomeIcon icon={faPhone} />
              Telefonnummer
            </span>
            <span className="lower-div__user-attributes">
              <FontAwesomeIcon icon={faGlobe} />
              Website
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserCard;
