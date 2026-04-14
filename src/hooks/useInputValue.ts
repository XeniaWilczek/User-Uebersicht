import { useState } from "react";
import type { ChangeEvent } from "react";

export function useInputValue(initialValue: string | number) {
  const [inputValue, setInputValue] = useState(initialValue);

  function handleInputChangeEvent(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setInputValue(event.target.value);
  }

  return {
    inputValue: inputValue,
    handleInputChangeEvent,
  };
}
