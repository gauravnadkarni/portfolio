// src/ThemeContext.tsx
import React, { useEffect, useState } from 'react';
import{ ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import { AppTheme, themes } from '../helpers/themes';
import { ThemeContext } from '../hooks/ThemeContext';
import { CssBaseline } from '@mui/material';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [selectedTheme, setSelectedTheme] = useState<AppTheme>(AppTheme.LIGHT_THEME);

  useEffect(() => {
    const selected = localStorage.getItem("selectedTheme");
    if (selected ) {
      if(selectedTheme !== selected) {
        setSelectedTheme(selected as AppTheme);
      }
    } else {
      localStorage.setItem("selectedTheme",selectedTheme);
    }
  },[selectedTheme])

  const changeTheme = () => {
    let newTheme = AppTheme.LIGHT_THEME;
    switch(selectedTheme) {
      case AppTheme.LIGHT_THEME:
        newTheme = AppTheme.DARK_THEME;
        break;
      case AppTheme.DARK_THEME:
        newTheme = AppTheme.LIGHT_THEME;
        break;
      default:
        newTheme = AppTheme.LIGHT_THEME;
        break;
    }
    setSelectedTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  return (
    <MuiThemeProvider theme={themes[selectedTheme] as Theme}>
      <ThemeContext.Provider value={{ selectedTheme , changeTheme }}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
