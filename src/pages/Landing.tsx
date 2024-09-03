import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import useDataContext from "../hooks/DataContext";
import useScrollContext from "../hooks/ScrollContext";
import PublicLayout from "../layout/PublicLayout";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";

const Landing: React.FC = () => {
  const {
    aboutRef,
    skillsRef,
    blogRef,
    projectsRef,
    resumeRef,
    workHistoryRef,
  } = useScrollContext();

  const { featureSwitches: {
    about: aboutFeatureEnabled,
    resume: resumeFeatureEnabled,
    skill: skillFeatureEnabled,
    workHistory: workItemFeatureEnabled,
    projects: projectsFeaturEnabled,
    blogs: blogsFeaturEnabled,
  } } = useDataContext();

  return (
    <PublicLayout>
      {aboutFeatureEnabled && <Grid size={12}>
        <GridItem>
          <div ref={aboutRef} className="scrollOffset">
            <About />
          </div>
        </GridItem>
      </Grid>}
      {skillFeatureEnabled && <Grid size={12}>
        <GridItem>
          <div ref={skillsRef} className="scrollOffset">
            <Skills />
          </div>
        </GridItem>
      </Grid>}
      {projectsFeaturEnabled && <Grid size={12}>
        <GridItem>
          <div ref={projectsRef} className="scrollOffset">
            <Projects />
          </div>
        </GridItem>
      </Grid>}
      {workItemFeatureEnabled && <Grid size={12}>
        <GridItem>
          <div ref={workHistoryRef} className="scrollOffset">
            <WorkHistory />
          </div>
        </GridItem>
      </Grid>}
      {resumeFeatureEnabled && <Grid size={12}>
        <GridItem>
          <div ref={resumeRef} className="scrollOffset">
            <Resume />
          </div>
        </GridItem>
      </Grid>}
      {blogsFeaturEnabled && <Grid size={12}>
        <GridItem>
          <div ref={blogRef} className="scrollOffset">
            <Blog />
          </div>
        </GridItem>
      </Grid>}
    </PublicLayout>
  );
};

export default Landing;
