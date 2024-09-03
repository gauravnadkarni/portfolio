import { Box, Grid2 as Grid, Paper } from "@mui/material";
import GridItem from "../components/GridItem";
import ResumeBox from "../components/Resume/ResumeBox";
import useDataContext from "../hooks/DataContext";

const Resume: React.FC = () => {
  const {resumeBoxProps} = useDataContext();
  return (
    <Grid size={12}>
      <GridItem>
        <Box
          sx={{padding:"20px"}}>
        <ResumeBox {...resumeBoxProps}/>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Resume;
