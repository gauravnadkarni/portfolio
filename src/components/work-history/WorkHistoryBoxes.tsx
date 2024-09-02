import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import WorkHistoryBox, { WorkHistoryBoxProps } from "./WorkHistoryBox";
import { Key } from "@mui/icons-material";

interface WorkHistoryBoxesProps {
  workItems: Array<WorkHistoryBoxProps>
}

const WorkHistoryBoxes: React.FC<WorkHistoryBoxesProps> = (props) => {
    return (
      <Timeline position="alternate">
        {props.workItems.map((item,idx) => (<WorkHistoryBox  {...item}/>))}
      </Timeline>
    );
  };


export default WorkHistoryBoxes;
