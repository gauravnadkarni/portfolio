// src/ThemeContext.tsx
import React, { useState } from 'react';
import{ ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../helpers/themes';
import { ThemeContext } from '../hooks/ThemeContext';
import { CssBaseline } from '@mui/material';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <MuiThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme, lightTheme, darkTheme }}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
