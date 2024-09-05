import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, useScrollTrigger, Zoom } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Footer from "../components/Footer";
import HeaderMenu from "../components/header/HeaderMenu";
import FEATURE_ENABLED_MAP, { SupportedSectionType } from "../helpers/feature-enabled-map";
import useScrollContext from "../hooks/ScrollContext";

interface LayoutProps {
  window?: () => Window;
  children: React.ReactNode;
  topHalfChildren: React.ReactNode;
  bottomHalfChildren: React.ReactNode;
  homeChild: React.ReactNode;
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

const Layout: React.FC<LayoutProps> = ({ children, topHalfChildren, bottomHalfChildren, homeChild }, props) => {
  const {
    contactRef
  } = useScrollContext();

  const featureEnabledMap = FEATURE_ENABLED_MAP;
  
  return (
    <> 
      <HeaderMenu />
      { featureEnabledMap[SupportedSectionType.HOME] && homeChild}
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
