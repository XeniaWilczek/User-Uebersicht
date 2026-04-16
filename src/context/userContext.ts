import { createContext, useContext, type Dispatch } from "react";
import type { User } from "../userType";
import type { UserAction } from "../hooks/useUserReducer";

//Types für dispatch festlegen: User-Objekt und id (als Zahl)

//Schablone für UserContext festlegen: User-Objekt und Auslöser der UserAction
interface UserContextType {
  users: User[];
  dispatch: Dispatch<UserAction>;
}

//Kontext erstellen

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext muss im Provider liegen");
  return context;
}
