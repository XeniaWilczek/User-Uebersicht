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
import type { User } from "../userType";

//
// User und die Funktion zum Löschen definieren
interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

function UserCard({ user, onDelete }: UserCardProps) {
  return (
    <div className="user-card">
      <div className="user-card__left-container">
        <img className="user-card__image" src="/images/user.jpg" alt="user" />
      </div>

      <div className="user-card__right-container">
        <div className="upper-div">
          <span className="upper-div__username">{user.username}</span>
          {/* Hier rufen wir onDelete mit der ID auf */}
          <button
            className="upper-div__delete-button"
            onClick={() => onDelete(user.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>

        <div className="lower-div">
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faCakeCandles} />
            {user.dateOfBirth}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faVenusMars} />
            {user.gender}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faAddressBook} />
            {user.address}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faEnvelope} />
            {user.email}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faPhone} />
            {user.phoneNumber}
          </span>
          <span className="lower-div__user-attributes">
            <FontAwesomeIcon icon={faGlobe} />
            {user.website}
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
