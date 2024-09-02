import { Box, Grid2 as Grid, Paper } from "@mui/material";
import GridItem from "../components/GridItem";
import ResumeBox from "../components/Resume/ResumeBox";

const Resume: React.FC = () => {
  return (
    <Grid size={12}>
      <GridItem>
        <Box
          sx={{padding:"20px"}}>
        <ResumeBox path={'https://drive.google.com/file/d/1-3sO60ORZeoA1Knh9TWFFdNxR0qoD5mi/view?usp=drive_link'}/>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Resume;
