import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import WorkHistoryBoxes from "../components/work-history/WorkHistoryBoxes";
import useDataContext from "../hooks/DataContext";

const Landing: React.FC = () => {
  const { workHistoryBoxProps } = useDataContext();

  return (
    <Grid size={12}>
      <GridItem>
        <WorkHistoryBoxes workItems={workHistoryBoxProps.workItems}/>
      </GridItem>
    </Grid>
  );
};

export default Landing;
