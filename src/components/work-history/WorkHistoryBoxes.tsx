import * as React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Timeline from "@mui/lab/Timeline";
import WorkHistoryBox, {
  WorkHistoryBoxProps,
  WorkHistoryBoxPropsWithIcons,
} from "./WorkHistoryBox";
import { Paper } from "@mui/material";

export interface WorkHistoryBoxesProps {
  workItems: Array<WorkHistoryBoxProps>;
}

const WorkHistoryBoxes: React.FC<WorkHistoryBoxesProps> = (props) => {
  const processedData = props.workItems.map<WorkHistoryBoxPropsWithIcons>(
    (item) => {
      const { dotTooltipText, tooltipPlacement, ...rest } = item;
      let dotIcon = <WorkIcon />;
      switch (rest.type) {
        case "Certification":
          dotIcon = <MilitaryTechIcon />;
          break;
        case "Course":
          dotIcon = <MenuBookIcon />;
          break;
        case "Study":
          dotIcon = <SchoolIcon />;
          break;
        default:
          dotIcon = <WorkIcon />;
          break;
      }

      return {
        ...rest,
        dotIcon,
        dotTooltip: <div>{dotTooltipText}</div>,
        tooltipPlacement:
          tooltipPlacement === "left" ? "bottom-end" : "bottom-start",
      };
    }
  );

  return (
    <Paper
      elevation={3}
      sx={{
        py: "30px",
        borderRadius: "10px",
      }}
    >
      <Timeline position="alternate">
        {processedData.map((item, idx) => (
          <WorkHistoryBox {...item} />
        ))}
      </Timeline>
    </Paper>
  );
};

export default WorkHistoryBoxes;
