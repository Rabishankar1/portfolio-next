import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
export const SectionContext = createContext<{
  visibleSection: string;
  setVisibleSection: Dispatch<SetStateAction<string>>;
}>({
  visibleSection: "",
  setVisibleSection: () => {},
});
