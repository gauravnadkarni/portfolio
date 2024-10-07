import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      homeTextColor:string;
      bodyBackgroundColor: string;
      headerBackgroundColor: string;
      footerBackground: string;
      isHeaderBackgroundOverlayed: boolean;
      landingChildrenOverlayColor: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      homeTextColor?:string;
      bodyBackgroundColor?: string;
      headerBackgroundColor?: string;
      footerBackground?: string;
      isHeaderBackgroundOverlayed?: boolean;
      landingChildrenOverlayColor: string;
    };
  }
}
