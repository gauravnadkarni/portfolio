import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));