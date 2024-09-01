import AboutBox from "../components/about/AboutBox";
import Layout from "../layout/PublicLayout";
import { Grid2 as Grid, Typography, Button } from "@mui/material";
import GridItem from "../components/GridItem";


const About: React.FC = () => {
  return (
    <Grid container size={12}>
      <GridItem>
        <AboutBox />
      </GridItem>
    </Grid>
  );
};

export default About;
