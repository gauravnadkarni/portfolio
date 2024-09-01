import { Box, Grid2 as Grid, Paper } from "@mui/material";
import GridItem from "../components/GridItem";
import ResumeBox from "../components/Resume/ResumeBox";

const Resume: React.FC = () => {
  return (
    <Grid size={12}>
      <GridItem>
        <Box
          sx={{padding:"20px"}}>
        <ResumeBox />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Resume;
