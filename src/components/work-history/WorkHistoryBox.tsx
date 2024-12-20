import styled from "@emotion/styled";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Fade, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export type WorkHistoryBoxProps = {
  type: "Work" | "Certification" | "Study" | "Course";
  oppText: string;
  mainText: string;
  subText: string;
  smallText: string;
  dotColor: "primary" | "info";
  dotTooltipText: string;
  tooltipPlacement: "left" | "right";
}
export type WorkHistoryBoxPropsWithIcons  = {
  dotIcon:
    | React.ReactElement<React.ComponentProps<typeof WorkIcon>>
    | React.ReactElement<React.ComponentProps<typeof MilitaryTechIcon>>
    | React.ReactElement<React.ComponentProps<typeof SchoolIcon>>
    | React.ReactElement<React.ComponentProps<typeof MenuBookIcon>>;
  dotTooltip: React.ReactElement<React.PropsWithChildren>;
  tooltipPlacement: "bottom-start" | "bottom-end"
} & Omit<WorkHistoryBoxProps, "dotTooltipText" | "tooltipPlacement" >;

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

const WorkHistoryBox: React.FC<WorkHistoryBoxPropsWithIcons> = (props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {props.oppText}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={props.dotColor}>
          <HtmlTooltip
            placement={props.tooltipPlacement}
            title={props.dotTooltip}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            { props.dotIcon}
          </HtmlTooltip>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography variant="h6" component="span">
          {props.mainText}
        </Typography>
        <Typography>{props.subText}</Typography>
        <Typography variant="caption" component="span">
          {props.smallText}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkHistoryBox;
