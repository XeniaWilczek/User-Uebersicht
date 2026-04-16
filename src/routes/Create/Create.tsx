import "./Create.scss";
import FreeInput from "../../components/FreeInput";
import SelectInput from "../../components/SelectInput";
import DateInput from "../../components/DateInput";
import Button from "../../components/Button";
import { useInputValue } from "../../hooks/useInputValue";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Create() {
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  const userName = useInputValue("");
  const dateOfBirth = useInputValue("");
  const gender = useInputValue("");
  const address = useInputValue("");
  const email = useInputValue("");
  const phoneNumber = useInputValue("");
  const website = useInputValue("");

  /*3. Hinzufügen des User-Objektss zum Array*/
  function handleCreateClick() {
    const values = [
      userName.inputValue,
      dateOfBirth.inputValue,
      gender.inputValue,
      address.inputValue,
      email.inputValue,
      phoneNumber.inputValue,
      website.inputValue,
    ];

    // 1. Prüfung, ob alle Werte vorhanden sind
    if (values.some((val) => val.toString().trim() === "")) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    // 2. Prüfung, ob bei Number-Feldern nur Ziffern eingegeben werden
    const phoneNumberType = Number(phoneNumber.inputValue);
    const birthdateType = Number(dateOfBirth.inputValue);

    if (isNaN(phoneNumberType) || isNaN(birthdateType)) {
      alert("Bitte für Telefon und Datum nur Ziffern eingeben!");
      return;
    }

    // Erstellung eines User-Objekts
    const newUser = {
      username: String(userName.inputValue),
      dateOfBirth: birthdateType,
      gender: String(gender.inputValue),
      address: String(address.inputValue),
      email: String(email.inputValue),
      phoneNumber: phoneNumberType,
      website: String(website.inputValue),
      id: Date.now(),
    };

    dispatch({ type: "ADD_USER", payload: newUser });
    navigate("/");
  }

  return (
    <div className="input-container">
      <FreeInput
        text={"Nutzername"}
        inputValue={userName.inputValue}
        placeholder={"Bitte Nutzernamen eingeben..."}
        onChange={userName.handleInputChangeEvent}
      />
      <DateInput
        text={"Geburtsdatum"}
        date={dateOfBirth.inputValue}
        onChange={dateOfBirth.handleInputChangeEvent}
      />
      <SelectInput
        heading={"Geschlecht"}
        onChange={gender.handleInputChangeEvent}
      />
      <FreeInput
        text={"Anschrift"}
        inputValue={address.inputValue}
        placeholder={"Bitte Anschrift eingeben..."}
        onChange={address.handleInputChangeEvent}
      />
      <FreeInput
        text={"E-Mail"}
        inputValue={email.inputValue}
        placeholder={"Bitte E-Mail-Adresse eingeben..."}
        onChange={email.handleInputChangeEvent}
      />
      <FreeInput
        text={"Telefonnummer"}
        inputValue={phoneNumber.inputValue}
        placeholder={"Bitte Telefonnummer eingeben..."}
        onChange={phoneNumber.handleInputChangeEvent}
      />
      <FreeInput
        text={"Website"}
        inputValue={website.inputValue}
        placeholder={"Bitte Website eingeben..."}
        onChange={website.handleInputChangeEvent}
      />
      <p className="input-container__alert">
        *Alle Eingabefelder müssen ausgefüllt sein!
      </p>

      <Button onClick={handleCreateClick} text={"Abschicken"} />
    </div>
  );
}

export default Create;
