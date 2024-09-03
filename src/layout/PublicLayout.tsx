import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/header/HeaderMenu";
import Footer from "../components/Footer";
import TypingSkills, { TypingSkillsProps } from "../components/TypingSkill";
import useScrollContext from "../hooks/ScrollContext";
import useDataContext from "../hooks/DataContext";
import { Box, Fab, Fade, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface LayoutProps {
  window?: () => Window;
  children: React.ReactNode;
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

const Layout: React.FC<LayoutProps> = ({ children }, props) => {
  const {
    homeRef,
    contactRef
  } = useScrollContext();

  const { featureSwitches: {
    home: homeFeatureEnabled,
    footer: footerFeatureEnabled,
  } } = useDataContext();
  
  return (
    <> 
      <HeaderMenu />
      { homeFeatureEnabled && <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("intro-bg.jpg")' }}
        ref={homeRef}
        id="back-to-top-anchor"
      >
        <Container maxWidth="lg">
          <Grid container>
            <div
              className="flex justify-center items-center flex-col"
              style={{ height: "100vh", margin: "auto" }}
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
          </Grid>
        </Container>
      </div>}
      <Container maxWidth="lg">
        <Grid container spacing={4} style={{ marginTop: "2rem" }}>
          {children}
        </Grid>
      </Container>
      {footerFeatureEnabled && <div ref={contactRef}>
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
