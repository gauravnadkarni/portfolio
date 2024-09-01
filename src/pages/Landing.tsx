import PublicLayout from "../layout/PublicLayout";
import {Grid2 as Grid} from "@mui/material";
import Home from "./Home";
import Projects from "./Projects";
import WorkHistory from "./WorkHistory";
import About from "./About";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Blog from "./Blog";
import Resume from "./Resume";
import Contact from "./Contact";
import GridItem from "../components/GridItem"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Landing: React.FC = () => {
  return (
    <PublicLayout>
      <Grid size={12}>
        <GridItem>
          <Home />
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <About />
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <Projects />
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <WorkHistory />
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <Resume />
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <Blog />
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <Contact />
        </GridItem>
      </Grid>
    </PublicLayout>
  );
};

export default Landing;
