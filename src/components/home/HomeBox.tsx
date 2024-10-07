import classes from "./Home.module.css";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import GridItem from "../../components/GridItem";
import TypingSkills from "../../components/TypingSkill";
import useScrollContext from "../../hooks/ScrollContext";

export type HomeBoxProps = {
  mainImage: string;
  profileName: string;
  skills: Array<string>;
};

const HomeBox: React.FC<HomeBoxProps> = (props) => {
  const { homeRef } = useScrollContext();
  const theme = useTheme();
  const { mainImage, profileName, skills } = props;

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url("${mainImage}")`, position:'relative' }}
      ref={homeRef}
      id="back-to-top-anchor"
    >
      <Container maxWidth="lg"
        sx={(theme) => {
          const isOverlayed = theme.palette.custom.isHeaderBackgroundOverlayed;
          if(isOverlayed) {
            return {
              position:'relative',
              zIndex:2,
            };
          }
          return {};
        }}>
        <Grid container>
          <Grid size={12}>
            <GridItem>
              <div
                className="flex justify-center items-center flex-col"
                style={{
                  height: "100vh",
                  margin: "auto",
                  textShadow: "5px -2px 7px black",
                }}
              >
                <div
                  className="text-7xl font-semibold"
                  style={{ marginBottom: "10px", color: theme.palette.custom.homeTextColor }}
                >
                  {`I am ${profileName}`}
                </div>
                <div className="text-2xl font-extralight"
                  style={{color: theme.palette.custom.homeTextColor}}
                >
                  <TypingSkills
                    speed={20}
                    delay={2000}
                    skills={skills.map((skill) => `#${skill}`)}
                  />
                </div>
              </div>
            </GridItem>
          </Grid>
        </Grid>
      </Container>
      {theme.palette.custom.isHeaderBackgroundOverlayed && <div className={classes.overlay}></div>}
    </div>
  );
};

export default HomeBox;
