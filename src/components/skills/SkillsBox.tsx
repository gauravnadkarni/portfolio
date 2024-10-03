import { Chip } from "@mui/material";
import * as React from "react";
import classes from "./SkillsBox.module.css";

type SkillType = {
  caption: string;
  color: "primary" | "info";
};

export type SkillsBoxProps = {
  skills: Array<SkillType>;
}

type skillWithCallback = SkillType & {
  onClick: ()=>void; // New property
};

export type SkillsBoxPropsWithCallback = {
  skills: Array<skillWithCallback>;
};

const SkillsBox: React.FC<SkillsBoxPropsWithCallback> = (props) => {
  const { skills } = props;

  return (
    <div className={classes.skillContainerBox}>
      <div className={classes.skillContainer}>
        {skills.map((skill, idx) => (
          <div key={idx} className={classes.skill}>
            <Chip
              onClick={skill.onClick}
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
