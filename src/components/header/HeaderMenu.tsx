import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import * as React from "react";
import FEATURE_ENABLED_MAP, {
  SupportedSectionType,
} from "../../helpers/feature-enabled-map";
import useScrollContext from "../../hooks/ScrollContext";
import useThemeContext from "../../hooks/ThemeContext";
import ThemeSwitch from "../ThemeSwitch";
import classes from "./HeaderMenu.module.css";
import { AppTheme } from "../../helpers/themes";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [showStaticAppBar, setShowStaticAppBar] = React.useState<boolean>(true);
  const { selectedTheme, changeTheme } = useThemeContext();

  const {
    homeRef,
    aboutRef,
    blogRef,
    contactRef,
    projectsRef,
    resumeRef,
    skillsRef,
    workHistoryRef,
    scrollToSection,
  } = useScrollContext();
 

  const pagesObject: Array<{
    name: string;
    ref?: React.RefObject<HTMLDivElement>;
    isFeatureEnabled: boolean;
    type: "link" | "switch";
  }> = [
    {
      name: "Home",
      ref: homeRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.HOME],
      type: "link",
    },
    {
      name: "About",
      ref: aboutRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.ABOUT],
      type: "link",
    },
    {
      name: "Skills",
      ref: skillsRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.SKILL],
      type: "link",
    },
    {
      name: "Projects",
      ref: projectsRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.PROJECT],
      type: "link",
    },
    {
      name: "Work History",
      ref: workHistoryRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.WORK_HISTORY],
      type: "link",
    },
    {
      name: "Resume",
      ref: resumeRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.RESUME],
      type: "link",
    },
    {
      name: "Blog",
      ref: blogRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.BLOG],
      type: "link",
    },
    {
      name: "Contact",
      ref: contactRef,
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.FOOTER],
      type: "link",
    },
    {
      name: "Theme",
      isFeatureEnabled: FEATURE_ENABLED_MAP[SupportedSectionType.THEME],
      type: "switch",
    },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || document.documentElement.scrollTop;
      if (position > 50) {
        setShowStaticAppBar(false);
      } else {
        setShowStaticAppBar(true);
      }
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      classes={{
        root: classNames({
          [classes.staticAppBar]: showStaticAppBar,
          [classes.movingAppBar]: !showStaticAppBar,
        }),
      }}
      sx={(theme) => ({
        boxShadow: "none",
        backgroundColor: showStaticAppBar
          ? "transparent"
          : theme.palette.custom.headerBackgroundColor,
      })}
      component="div"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontSize: "1.6rem",
            }}
          >
            Portfolio
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontSize: "1.6rem",
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
              {pagesObject
                .filter((page) => page.isFeatureEnabled)
                .map((page) => {
                  let content;
                  if (page.type === "link") {
                    content = (
                      <MenuItem
                        key={page.name}
                        onClick={() => {
                          handleCloseNavMenu();
                          scrollToSection(page.ref!);
                        }}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    );
                  } else if (page.type === "switch") {
                    content = (
                      <MenuItem key={page.name}>
                        <ThemeSwitch
                          sx={{ m: 1 }}
                          key={page.name}
                          checked={selectedTheme!==AppTheme.LIGHT_THEME}
                          onClick={() => {
                            changeTheme();
                          }}
                        />
                      </MenuItem>
                    );
                  }
                  return content;
                })}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <ul className="flex flex-row items-center">
              {pagesObject
                .filter((page) => page.isFeatureEnabled)
                .map((page, idx) => {
                  let content;
                  if (page.type === "link") {
                    content = (
                      <li
                        className="font-semibold"
                        style={{ margin: "0px 10px" }}
                        key={idx}
                      >
                        <button
                          className={classes.link}
                          onClick={() => scrollToSection(page.ref!)}
                        >
                          {page.name}
                        </button>
                      </li>
                    );
                  } else if (page.type === "switch") {
                    content = (
                      <li
                        className="font-semibold"
                        style={{ margin: "0px 10px" }}
                        key={idx}
                      >
                        <ThemeSwitch
                          key={page.name}
                          sx={{ m: 1 }}
                          checked={selectedTheme!==AppTheme.LIGHT_THEME}
                          onClick={() => {
                            changeTheme();
                          }}
                        />
                      </li>
                    );
                  }
                  return content;
                })}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
