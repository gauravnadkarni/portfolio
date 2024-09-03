import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Link } from "@mui/material";

export interface ResumeBoxProps {
  path: string;
}

const ResumeBox: React.FC<ResumeBoxProps> = ({ path }) => {
  return (
    <Box>
      <Button
        sx={{ borderRadius: "50px", padding: "20px" }}
        component={Link}
        variant="contained"
        size="large"
        startIcon={<DownloadIcon />}
        onClick={()=> {
          window.open(path, '_blank', 'noopener,noreferrer');
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default ResumeBox;
