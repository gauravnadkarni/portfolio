import DownloadIcon from "@mui/icons-material/Download";
import { Button, Link } from "@mui/material";

export interface ResumeBoxProps {
  path: string;
}

const ResumeBox: React.FC<ResumeBoxProps> = ({ path }) => {
  return (
    <Button
      sx={{ borderRadius: "50px", padding: "20px" }}
      component={Link}
      variant="contained"
      size="large"
      startIcon={<DownloadIcon />}
      onClick={() => {
        window.open(path, "_blank", "noopener,noreferrer");
      }}
    >
      Download Resume
    </Button>
  );
};

export default ResumeBox;
