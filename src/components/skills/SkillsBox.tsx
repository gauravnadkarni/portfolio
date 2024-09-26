import { Chip } from "@mui/material";
import * as React from "react";
import classes from "./SkillsBox.module.css";

export interface SkillsBoxProps {
  skills: Array<{
    caption: string;
    color: "primary" | "info";
  }>;
}

const SkillsBox: React.FC<SkillsBoxProps> = (props) => {
  const { skills } = props;

  return (
    <div className={classes.skillContainerBox}>
      <div className={classes.skillContainer}>
        {skills.map((skill, idx) => (
          <div key={idx} className={classes.skill}>
            <Chip
              classes={{root:classes.skillRoot}}
              label={skill.caption}
              color={skill.color || "info"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
