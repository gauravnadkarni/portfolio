import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import classes from "./HeaderMenu.module.css";
import { useScroll } from "../ScrollContext";
import classNames from "classnames";

const pages = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Work History",
  "Blog",
  "Resume",
  "Links",
  "Contact",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [showStaticAppBar, setShowStaticAppBar] = React.useState<boolean>(true);

  const { homeRef,aboutRef,blogRef,contactRef,projectsRef,resumeRef,skillsRef,workHistoryRef, scrollToSection } = useScroll();

  const pagesObject = [{
    name:"Home",
    ref: homeRef
  },{
    name:"About",
    ref: aboutRef
  },{
    name:"Skills",
    ref: skillsRef
  },{
    name:"Projects",
    ref: projectsRef
  },{
    name:"Work History",
    ref: workHistoryRef
  },{
    name:"Resume",
    ref: resumeRef
  },{
    name:"Blog",
    ref: blogRef
  },{
    name:"Contact",
    ref: contactRef
  }];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
        const position = window.scrollY || document.documentElement.scrollTop;
        if(position>50) {
          setShowStaticAppBar(false)
        } else {
          setShowStaticAppBar(true)
        }
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" color="transparent" sx={{
      boxShadow: 'none'}
      }
      classes={{root:classNames({[classes.staticAppBar]:showStaticAppBar, [classes.movingAppBar]:!showStaticAppBar})}}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Portfolio
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesObject.map((page) => (
                <MenuItem key={page.name} onClick={() => {
                  handleCloseNavMenu();
                  scrollToSection(page.ref)
                }}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ul className="flex flex-row">
            {pagesObject.map((page) => (
                <li className="font-semibold" style={{'margin':'0px 10px'}}>
                  <a href="#" onClick={() => scrollToSection(page.ref)}>{page.name}</a>
                </li>
            ))}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
