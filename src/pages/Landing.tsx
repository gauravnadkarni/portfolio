import PublicLayout from "../layout/PublicLayout";
import { Grid2 as Grid } from "@mui/material";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkHistory from "./WorkHistory";
import About from "./About";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Blog from "./Blog";
import Resume from "./Resume";
import GridItem from "../components/GridItem";
import { useRef } from "react";
import { useScroll } from "../components/ScrollContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Landing: React.FC = () => {
  const {
    aboutRef,
    skillsRef,
    blogRef,
    projectsRef,
    resumeRef,
    workHistoryRef,
  } = useScroll();

  return (
    <PublicLayout>
      <Grid size={12}>
        <GridItem>
          <div ref={aboutRef}>
            <About />
          </div>
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <div ref={skillsRef}>
            <Skills />
          </div>
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <div ref={projectsRef}>
            <Projects />
          </div>
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <div ref={workHistoryRef}>
            <WorkHistory />
          </div>
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <div ref={resumeRef}>
            <Resume />
          </div>
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <div ref={blogRef}>
            <Blog />
          </div>
        </GridItem>
      </Grid>
    </PublicLayout>
  );
};

export default Landing;
