import * as React from "react";
import styled from "@emotion/styled";
import { Chip, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
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
          <div className={classes.skill}>
            <Chip
              label={skill.caption}
              key={idx}
              color={skill.color || "info"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
