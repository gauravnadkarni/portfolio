import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import WorkHistoryBox, { WorkHistoryBoxProps } from "./WorkHistoryBox";

interface WorkHistoryBoxesProps {
  workItems: Array<WorkHistoryBoxProps>
}

const WorkHistoryBoxes: React.FC<WorkHistoryBoxesProps> = (props) => {
    return (
      <Timeline position="alternate">
        {props.workItems.map((item) => (<WorkHistoryBox {...item}/>))}
      </Timeline>
    );
  };


export default WorkHistoryBoxes;
