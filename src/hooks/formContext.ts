import { createContext } from "react";
import type { ClickerAction } from "../hooks/ClickerReducer";
export const ClickerContext = createContext<{
  count: number;
  dispatch: React.Dispatch<ClickerAction>;
}>({
  count: 0,
  dispatch: () => {},
});
