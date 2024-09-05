import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, useScrollTrigger, Zoom } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Footer from "../components/Footer";
import HeaderMenu from "../components/header/HeaderMenu";
import TypingSkills from "../components/TypingSkill";
import useScrollContext from "../hooks/ScrollContext";
import GridItem from '../components/GridItem';
import FEATURE_ENABLED_MAP, { SupportedSectionType } from "../helpers/feature-enabled-map";

interface LayoutProps {
  window?: () => Window;
  children: React.ReactNode;
  topHalfChildren: React.ReactNode;
  bottomHalfChildren: React.ReactNode;
}

function smoothScrollToTop() {
  const scrollDuration = 500;
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  let scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}


function ScrollTop(props: LayoutProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      smoothScrollToTop();
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const Layout: React.FC<LayoutProps> = ({ children, topHalfChildren, bottomHalfChildren }, props) => {
  const {
    homeRef,
    contactRef
  } = useScrollContext();

  const featureEnabledMap = FEATURE_ENABLED_MAP;
  
  return (
    <> 
      <HeaderMenu />
      { featureEnabledMap[SupportedSectionType.HOME] && <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("assets/images/home-bg.png")' }}
        ref={homeRef}
        id="back-to-top-anchor"
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={12}>
              <GridItem>
                <div
                  className="flex justify-center items-center flex-col"
                  style={{ height: "100vh", margin: "auto", textShadow:"5px -2px 7px black" }}
                >
                  <div
                    className="text-7xl text-white font-semibold"
                    style={{ marginBottom: "10px" }}
                  >
                    I am Gaurav Nadkarni
                  </div>
                  <div className="text-2xl text-white font-extralight">
                    <TypingSkills
                      speed={20}
                      delay={2000}
                      skills={["#Fullstack Developer", "#Beckend Developer"]}
                    />
                  </div>
                </div>
              </GridItem>
            </Grid>
          </Grid>
        </Container>
      </div>}
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ marginTop: "2rem" }}>
          {topHalfChildren}
        </Grid>
      </Container>
        {children}
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ marginTop: "2rem" }}>
          {bottomHalfChildren}
        </Grid>
      </Container>
      {featureEnabledMap[SupportedSectionType.FOOTER] && <div ref={contactRef}>
        <Footer />
      </div>}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Layout;
