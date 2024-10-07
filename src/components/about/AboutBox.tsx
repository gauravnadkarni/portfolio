import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import { useCallback, useEffect, useRef, useState } from "react";
import useVisibility from "../../hooks/Visibility";
import GridItem from "../GridItem";
import classes from "./AboutBox.module.css";

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
    Record<string, { done: boolean; weight: number }>
  >(
    (
      acc: Record<string, { done: boolean; weight: number }>,
      skill: AboutBoxProps["skills"][number]
    ) => {
      acc[skill.name] = { done: false, weight: 0 };
      return acc;
    },
    {}
  );

  const elements = useRef<Array<HTMLDivElement>>([]);
  const intervalRef = useRef<number | null>(null);
  const collectionRef = useRef<Record<string, boolean> | null>(null);
  const [skillState, setSkillState] = useState<
    Record<string, { done: boolean; weight: number }> | undefined
  >({ ...initialState });
  const { collection }: { collection: Record<string, boolean> | null } =
    useVisibility<HTMLDivElement>(elements.current, 0);

  const addToElementsRef = (el: HTMLDivElement) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  const registerSkillLoading = useCallback(() => {
    if (!collectionRef.current) {
      return;
    }

    //setInterval code here - trying to batch state updates
    const isAnySkillComponentVisible = Object.keys(collectionRef.current).find(
      (skillName) => collectionRef.current && collectionRef.current[skillName]
    );
    if (intervalRef.current === null) {
      if (isAnySkillComponentVisible) {
        intervalRef.current = window.setInterval(() => {
          setSkillState((prevState) => {
            if (!prevState) {
              return prevState;
            }
            let currentState = { ...prevState };
            skills.forEach((skill) => {
              const matchingSkillFromState = currentState[skill.name];
              const isRefVisible =
                collectionRef.current && collectionRef.current[skill.name];
              if (isRefVisible === true) {
                // if ref is visible
                if (matchingSkillFromState.done === false) {
                  // if weight is yet to reach the mark
                  if (matchingSkillFromState.weight === skill.weightAmount) {
                    //if incrementing weight amount equals weight amount from props
                    currentState[skill.name] = {
                      done: true,
                      weight: currentState[skill.name].weight,
                    };
                  } else {
                    //else incrementing weight amount is yet to reach weight amount from props
                    currentState[skill.name] = {
                      done: false,
                      weight: currentState[skill.name].weight + 1,
                    };
                  }
                }
                // else weight already reached the mark
                //nothing needs to be done, we can get rid of this block
              } else {
                // ref is not visible
                if (
                  currentState[skill.name].done !== false ||
                  currentState[skill.name].weight !== 0
                ) {
                  currentState[skill.name] = {
                    done: false,
                    weight: 0,
                  };
                }
              }
            });
            const isStateUpdateNotRequired = skills.every(
              (skill) =>
                prevState[skill.name].weight ===
                  currentState[skill.name].weight &&
                prevState[skill.name].done === currentState[skill.name].done
            );
            return isStateUpdateNotRequired ? prevState : currentState;
          });
        }, 3);
      }
    } else {
      if (!isAnySkillComponentVisible) {
        console.log("clearing set interval");
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSkillState(initialState);
      }
    }
  }, [skills, initialState]);

  useEffect(() => {
    collectionRef.current = collection;
  }, [collection]);

  useEffect(() => {
    registerSkillLoading();
  }, [registerSkillLoading]);

  return (
    <Paper elevation={3}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <GridItem>
            <div style={{ padding: "20px" }}>
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
                    <div style={{ margin: "10px 0px 10px" }}>
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
                              value={
                                skillState && skillState[skill.name].weight
                              }
                              sx={{ height: "10px" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </GridItem>
                </Grid>
              </Grid>
            </div>
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
                      aboutMe.map((data, idx) => (
                        <p key={idx}>{data.paragraph}</p>
                      ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </GridItem>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutBox;
