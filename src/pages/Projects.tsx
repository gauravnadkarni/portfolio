import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import ProjectCard, { ProjectCardPropsWithIcons } from "../components/projects/ProjectCard";
import {getIconFromText, SupportedIconType} from "../helpers/icon-map";
import useDataContext from "../hooks/DataContext";
import { useState } from "react";
import DialogBox from "../components/Dialog";

const Projects: React.FC = () => {
  const initailState:{
    isOpen:boolean;
    title:string;
    description:Array<string>;
  } = {
    isOpen: false,
    title:"",
    description: [],
  }
  const {projectBoxProps} = useDataContext();
  const [projectDialogState, setProjectDialogState] = useState({...initailState});
  const { 
    isOpen,
    title,
    description,
  } = projectDialogState;

  const handleDialogClose = () => {
    setProjectDialogState({
      ...initailState
    })
  }

  const handleDialogOpen = (title:string, description:Array<string>) => {
    setProjectDialogState({
      isOpen: true,
      title,
      description
    })
  }

  const projectCardsPropsWithIcons:Array<ProjectCardPropsWithIcons> = projectBoxProps.map<ProjectCardPropsWithIcons>((props)=>({
    ...props,
    links: props.links.map<ProjectCardPropsWithIcons["links"][number]>((link)=>({
      link:link.link,
      icon:getIconFromText(link.iconText),
      iconText: link.iconText as SupportedIconType,
    })),
    onProjectInfoClick: handleDialogOpen
  }))

  return (
    <>
    <Grid container spacing={2}>
      {projectCardsPropsWithIcons.map((project, idx) =>(<Grid size={{lg:4,md:4,xl:4,xs:12,sm:12}} key={idx}>
        <GridItem>
          <ProjectCard {...project}/>
        </GridItem>
      </Grid>))}
    </Grid>
    <DialogBox
        title={title}
        content={description}
        isOpen={isOpen}
        handleClose={handleDialogClose}
        actions={[{
          title: "Ok",
          onClick: handleDialogClose,
        },]}
      />
      ;
    </>
  );
};

export default Projects;
