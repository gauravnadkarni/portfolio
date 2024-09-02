import * as React from "react";
import classes from "./SkillsBox.module.css";
import { Chip, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import styled from "@emotion/styled";

export interface SkillsBoxProps {
  skills: Array<{
    caption: string;
    color: "primary" | "info";
  }>;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    border: "1px solid #dadde9",
  },
}));

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
