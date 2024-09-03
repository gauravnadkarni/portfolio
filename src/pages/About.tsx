import AboutBox from "../components/about/AboutBox";
import Layout from "../layout/PublicLayout";
import { Grid2 as Grid, Typography, Button } from "@mui/material";
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
