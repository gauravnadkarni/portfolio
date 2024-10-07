import { Theme } from '@mui/material';
import { createContext, useContext } from 'react';

interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    lightTheme:Theme;
    darkTheme:Theme;
  }

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const useHook = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("themeContext must be used within a DataProvider");
  }
  return context;
}

export default useHook;