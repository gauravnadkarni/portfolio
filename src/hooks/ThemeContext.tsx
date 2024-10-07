import { createContext, useContext } from "react";

interface ThemeContextProps {
  selectedTheme: string;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const useHook = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("themeContext must be used within a DataProvider");
  }
  return context;
};

export default useHook;
