import "./Create.scss";
import FreeInput from "../../components/FreeInput";
import SelectInput from "../../components/SelectInput";
import DateInput from "../../components/DateInput";
import Button from "../../components/Button";
import { useInputValue } from "../../hooks/useInputValue";

function Create() {
  //jeder Funktionsaufruf ist in sich geschlossen und gibt immer ein Objekt mit denselben Attributen zurück, deshalb funktionieren diese Zuweisungen
  const userName = useInputValue("");
  const dateOfBirth = useInputValue("");
  const gender = useInputValue("");
  const address = useInputValue("");
  const email = useInputValue("");
  const phoneNumber = useInputValue("");
  const website = useInputValue("");

  return (
    <div className="input-container">
      <FreeInput
        text={"Nutzername"}
        inputValue={userName.inputValue}
        placeholder={"Bitte den Nutzernamen eingeben..."}
        onChange={userName.handleInputChangeEvent}
      ></FreeInput>
      <DateInput
        text={"Geburtsdatum"}
        date={dateOfBirth.inputValue}
        onChange={dateOfBirth.handleInputChangeEvent}
      ></DateInput>
      <SelectInput
        heading={"Geschlecht"}
        onChange={gender.handleInputChangeEvent}
      ></SelectInput>
      <FreeInput
        text={"Anschrift"}
        inputValue={address.inputValue}
        placeholder={"Bitte Anschrift eingeben..."}
        onChange={address.handleInputChangeEvent}
      ></FreeInput>
      <FreeInput
        text={"E-Mail"}
        inputValue={email.inputValue}
        placeholder={"Bitte E-Mail-Adresse eingeben..."}
        onChange={email.handleInputChangeEvent}
      ></FreeInput>
      <FreeInput
        text={"Telefonnummer"}
        inputValue={phoneNumber.inputValue}
        placeholder={"Bitte Telefonnummer eingeben..."}
        onChange={phoneNumber.handleInputChangeEvent}
      ></FreeInput>
      <FreeInput
        text={"Website"}
        inputValue={website.inputValue}
        placeholder={"Bitte Website eingeben..."}
        onChange={website.handleInputChangeEvent}
      ></FreeInput>
      <Button></Button>
    </div>
  );
}
export default Create;
