import type { ChangeEvent } from "react";

function SelectInput({
  heading,
  onChange,
}: {
  heading: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <>
      <label htmlFor="selectInput" className="input-container__label">
        {heading + ":"}

        <select
          className="input-container__input"
          id="selectInput"
          onChange={onChange}
        >
          <option value="">--Wählen Sie eine Option--</option>
          <option value="männlich">männlich</option>
          <option value="weiblich">weiblich</option>
          <option value="divers">divers</option>
        </select>
      </label>
    </>
  );
}
export default SelectInput;
