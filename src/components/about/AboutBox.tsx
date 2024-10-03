import { Avatar, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import GridItem from "../GridItem";
import classes from "./AboutBox.module.css";
import useVisibility from "../../hooks/Visibility";
import { useCallback, useEffect, useRef, useState } from "react";

export interface AboutBoxProps {
  name: string;
  email: string;
  profile: string;
  phone: string;
  image: {
    src: string;
    altText: string;
  };
  skills: Array<{
    name: string;
    weightText: string;
    weightAmount: number;
  }>;
  aboutMe: Array<{
    paragraph: string;
  }>;
}

const AboutBox: React.FC<AboutBoxProps> = (props) => {
  const {
    name,
    email,
    profile,
    phone,
    skills,
    image: { src: imageSrc, altText: imageAltText },
    aboutMe,
  } = props;

  const initialState = skills.reduce<
    Record<string, { done: false; weight: number }>
  >(
    (
      acc: Record<string, { done: false; weight: number }>,
      skill: AboutBoxProps["skills"][number]
    ) => {
      acc[skill.name] = { done: false, weight: 0 };
      return acc;
    },
    {}
  );

  const elements = useRef<Array<HTMLDivElement>>([]);
  const [skillState, setSkillState] = useState<
    Record<string, { done: boolean; weight: number }> | undefined
  >({ ...initialState });
  const { collection }: { collection: Record<string, boolean> | null } =
    useVisibility<HTMLDivElement>(elements.current, 100);

  const addToElementsRef = (el: HTMLDivElement) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  const registerSkillLoading = useCallback(() => {
    if (!collection || !skillState) {
      return;
    }

    skills.forEach((skill) => {
      const matchingSkillFromState = skillState[skill.name];
      const isRefVisible = collection[skill.name];
      if (isRefVisible === true && matchingSkillFromState.done === false) {
        let ref = setInterval(() => {
          setSkillState((prevState) => {
            if (!prevState) {
              return undefined;
            }
            const state = { ...prevState };
            if (prevState[skill.name].weight === skill.weightAmount) {
              clearInterval(ref);
              return prevState;
            }

            state[skill.name] = {
              ...state[skill.name],
              weight: state[skill.name].weight + 1,
            };
            return {
              ...state,
            };
          });
        }, 100);
      } else if (isRefVisible === false) {
        setSkillState((prevState) => {
          if (!prevState) {
            return undefined;
          }
          const state = { ...prevState };
          if(state[skill.name].done === false && state[skill.name].weight === 0) {
            return prevState;
          }
          state[skill.name] = {
            done: false,
            weight: 0,
          };
          return {
            ...state,
          };
        });
      }
    });
  },[collection,skillState,skills]);

  useEffect(() => {
    registerSkillLoading();
  },[registerSkillLoading]);

  return (
    <Box>
      <Paper elevation={3}>
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <GridItem>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <GridItem>
                    <Grid container>
                      <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4, xl: 4 }}>
                        <GridItem>
                          <Avatar
                            alt={imageAltText}
                            src={imageSrc}
                            variant="rounded"
                            sx={{ width: "100%", height: "150px" }}
                          />
                        </GridItem>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
                        <GridItem>
                          <div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>
                                Name:
                              </div>
                              <div className={classes.profileDetailbox}>
                                {name}
                              </div>
                            </div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>
                                Profile:
                              </div>
                              <div className={classes.profileDetailbox}>
                                {profile}
                              </div>
                            </div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>
                                Email:
                              </div>
                              <div className={classes.profileDetailbox}>
                                {email}
                              </div>
                            </div>
                            <div className={classes.profileDetailContainer}>
                              <div className={classes.profileDetailbox}>
                                Phone:
                              </div>
                              <div className={classes.profileDetailbox}>
                                {phone}
                              </div>
                            </div>
                          </div>
                        </GridItem>
                      </Grid>
                    </Grid>
                  </GridItem>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <GridItem>
                    <div className={classes.skillBlock}>
                      <div className={classes.skillHeading}>Skills</div>
                      {skills.map((skill, idx) => (
                        <div
                          ref={addToElementsRef}
                          id={skill.name}
                          className={classes.skillBox}
                          key={idx}
                        >
                          <div className={classes.skillBoxText}>
                            <div className={classes.skillBoxLeft}>
                              {skill.name}
                            </div>
                            <div className={classes.skillBoxRight}>
                              {skill.weightText}
                            </div>
                          </div>
                          <LinearProgress
                            variant="determinate"
                            value={skillState && skillState[skill.name].weight}
                            sx={{ height: "10px" }}
                          />
                        </div>
                      ))}
                    </div>
                  </GridItem>
                </Grid>
              </Grid>
            </GridItem>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <GridItem>
              <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                  <div className={classes.aboutMeContainer}>
                    <div className={classes.aboutMeTitle}>About me</div>
                    <div className={classes.aboutMeContent}>
                      {aboutMe &&
                        aboutMe.map((data,idx) => <p key={idx}>{data.paragraph}</p>)}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </GridItem>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AboutBox;
