import { Container, Grid2 as Grid, useTheme } from "@mui/material";
import GridItem from "../components/GridItem";
import useScrollContext from "../hooks/ScrollContext";
import PublicLayout from "../layout/PublicLayout";
import About from "./About";
import Blog from "./Blog";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";
import FEATURE_ENABLED_MAP, { SupportedSectionType } from "../helpers/feature-enabled-map";
import HomeBox from "../components/home/HomeBox";
import useDataContext from "../hooks/DataContext";

const generateChildComponent = (
  component: React.ReactNode,
  ref: React.RefObject<HTMLDivElement>,
) => (<Grid size={12}>
      <GridItem>
        <div ref={ref} className="scrollOffset">
          {component}
        </div>
      </GridItem>
    </Grid>
  );

const Landing: React.FC = () => {
  const {
    aboutRef,
    skillsRef,
    blogRef,
    projectsRef,
    resumeRef,
    workHistoryRef,
  } = useScrollContext();
  const theme = useTheme();

  const {homeBoxProps:{
    mainImage: homeBoxMainImage,
    profileName: homeBoxProfileImage,
    skills: homeBoxSkills,
  }} = useDataContext();

  const featureEnabledMap = FEATURE_ENABLED_MAP;

  const aboutComponent = featureEnabledMap[SupportedSectionType.ABOUT] && generateChildComponent(<About />, aboutRef);
  const skillsComponent = featureEnabledMap[SupportedSectionType.SKILL] && generateChildComponent(<Skills />, skillsRef);
  const projectsComponent = featureEnabledMap[SupportedSectionType.PROJECT] && generateChildComponent(<Projects />, projectsRef);
  const workHistoryComponent = featureEnabledMap[SupportedSectionType.WORK_HISTORY] && generateChildComponent(<WorkHistory />, workHistoryRef);
  const resumeComponent = featureEnabledMap[SupportedSectionType.RESUME] && generateChildComponent(<Resume />, resumeRef);
  const blogsComponent = featureEnabledMap[SupportedSectionType.BLOG] && generateChildComponent(<Blog />, blogRef);
  const homeComponent = featureEnabledMap[SupportedSectionType.HOME] && <HomeBox mainImage={homeBoxMainImage} profileName={homeBoxProfileImage} skills={homeBoxSkills} />;
  const topHalfChildren = (
    <>
      {aboutComponent}
      {skillsComponent}
    </>
  );

  const bottomHalfChildren = (
    <>
      {workHistoryComponent}
      {resumeComponent}
      {blogsComponent}
    </>
  );

  return (
    <PublicLayout
      topHalfChildren={topHalfChildren}
      bottomHalfChildren={bottomHalfChildren}
      homeChild={homeComponent}
    >
      <div style={{
        backgroundImage:"url(assets/images/projects-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position:"relative",
      }}>
        <div
        style={{
          position:"absolute",
          top: 0,
          left: 0,
          padding: "0px",
          height: "100%",
          width: "100%",
          opacity: 0.5,
          backgroundColor: theme.palette.custom.landingChildrenOverlayColor,
        }}
        ></div>
        <Container maxWidth="lg" sx={{position:"relative"}}>
          <Grid container spacing={4}>
            {featureEnabledMap[SupportedSectionType.PROJECT] && (projectsComponent)}
          </Grid>
        </Container>
      </div>
    </PublicLayout>
  );
};

export default Landing;
