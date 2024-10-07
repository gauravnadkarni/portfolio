import { createTheme, Theme } from "@mui/material";

export enum AppTheme {
  LIGHT_THEME = 'light',
  DARK_THEME = 'dark',
} 

const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: AppTheme.LIGHT_THEME,
    primary: {
      main: "#1976d2",
    },
    background: {
      default: '#F5F5F5',
    },
    custom: {
      headerBackgroundColor: "#ffffff",
      homeTextColor: "#ffffff",
      footerBackground: "#a7caed",
    }
  },
});

const darkTheme: Theme = createTheme({
  cssVariables: true,
  palette: {
    mode: AppTheme.DARK_THEME,
    primary: {
      main: "#90caf9",
    },
    background: {
      default: '#494F55',
    },
    custom: {
      headerBackgroundColor: "#000000",
      homeTextColor: "#c0c0c0",
      footerBackground: "#000000",
    },
  },
});

export const themes: {
  [key in AppTheme]:Theme
}  = {
  [AppTheme.LIGHT_THEME]: lightTheme,
  [AppTheme.DARK_THEME]: darkTheme,
}