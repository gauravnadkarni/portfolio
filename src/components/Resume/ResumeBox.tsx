import classes from './ResumeBox.module.css';
import { PropsWithChildren } from "react";
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Button, Link } from "@mui/material";

const ResumeBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
        <Button sx={{borderRadius:'50px', padding:"20px"}} component={Link} variant="contained" size="large" startIcon={<DownloadIcon />}>
          Download Resume
        </Button>
    </Box>
  );
};

export default ResumeBox;
