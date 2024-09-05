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

  const { mainImage, profileName, skills } = props;

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url("${mainImage}")` }}
      ref={homeRef}
      id="back-to-top-anchor"
    >
      <Container maxWidth="lg">
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
                  className="text-7xl text-white font-semibold"
                  style={{ marginBottom: "10px" }}
                >
                  {`I am ${profileName}`}
                </div>
                <div className="text-2xl text-white font-extralight">
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
    </div>
  );
};

export default HomeBox;
