import type { User } from "../userType";

export const initialState: User = {
  username: "Name",
  dateOfBirth: 0,
  gender: "Geschlecht",
  address: "Anschrift",
  email: "E-Mail",
  phoneNumber: 0,
  website: "Website",
  id: 0,
};

export type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "REMOVE_USER"; payload: number }
  | { type: "UPDATE_USER"; payload: User };

// export function userReducer(state: User[], action: <UserAction>): User {
// switch (action.type) {
// case "UPDATE":
// return {
// ...state,
// [action.payload.field]: action.payload.value,
// };
// case "RESET":
// return initialState;
// }
// }
