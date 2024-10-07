import { Box } from "@mui/material";

const GridItem: React.FC<React.PropsWithChildren> = ({children}) => (
  <Box
    sx={(theme) => ({
      backgroundColor: "transparent",
      boxShadow: "none",
      ...theme.typography.body2,
      textAlign: "center",
      color: theme.palette.text.secondary,
    })}
  >
    {children}
    </Box>
);

export default GridItem;
