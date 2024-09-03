import { Grid2 as Grid } from "@mui/material";
import AboutBox from "../components/about/AboutBox";
import GridItem from "../components/GridItem";
import useDataContext from "../hooks/DataContext";

const About: React.FC = () => {
  const {aboutBoxProps} = useDataContext();

  return (
    <Grid container size={12}>
      <GridItem>
        <AboutBox {...aboutBoxProps}/>
      </GridItem>
    </Grid>
  );
};

export default About;
