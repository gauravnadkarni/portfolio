import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import ProjectCard, { ProjectCardPropsWithIcons } from "../components/projects/ProjectCard";
import {getIconFromText} from "../helpers/icon-map";
import useDataContext from "../hooks/DataContext";

const Projects: React.FC = () => {
  const {projectBoxProps} = useDataContext();
  const projectCardsPropsWithIcons:Array<ProjectCardPropsWithIcons> = projectBoxProps.map<ProjectCardPropsWithIcons>((props)=>({
    ...props,
    links: props.links.map<ProjectCardPropsWithIcons["links"][number]>((link)=>({
      link:link.link,
      icon:getIconFromText(link.iconText)
    }))
  }))

  return (
    <Grid container spacing={2}>
      {projectCardsPropsWithIcons.map((project, idx) =>(<Grid size={{lg:4,md:4,xl:4,xs:12,sm:12}} key={idx}>
        <GridItem>
          <ProjectCard {...project}/>
        </GridItem>
      </Grid>))}
    </Grid>
  );
};

export default Projects;
