import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import ResumeBox from "../components/Resume/ResumeBox";
import useDataContext from "../hooks/DataContext";

const Resume: React.FC = () => {
  const { resumeBoxProps } = useDataContext();
  return (
    <Grid size={12}>
      <GridItem>
        <ResumeBox {...resumeBoxProps} />
      </GridItem>
    </Grid>
  );
};

export default Resume;
