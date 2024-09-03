import {
  Grid2 as Grid,
  Box,
} from "@mui/material";
import GridItem from "../components/GridItem";
import SkillsBox from "../components/skills/SkillsBox";
import useDataContext from "../hooks/DataContext";

const Home: React.FC = () => {
  const {skillsBoxProps} = useDataContext();
  return (
    <Grid size={12}>
      <GridItem>
        <Box
          sx={{padding:"20px"}}>
        <SkillsBox skills={skillsBoxProps.skills}/>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
