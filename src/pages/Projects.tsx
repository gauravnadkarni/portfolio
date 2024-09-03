import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import ProjectCard, { ProjectCardPropsWithIcons } from "../components/projects/ProjectCard";
import useDataContext from "../hooks/DataContext";
import ICON_MAP from "../helpers/icon-map";

const DATA = [{
  image:"/assets/images/cdt.jpg",
  title:"Table, Doors & Treasure",
  description:"I developed this game for one of the hackthons that I participated in. The idea over here was to get through the doors until you find a monster behind them or you reach the treasure.",
  tech:[{
    link:"https://clerk.com/",
    name: "Clerk Auth",
  },{
    link:"https://openai.com/index/chatgpt/",
    name: "chatGPT",
  },{
    link:"https://openai.com/index/dall-e/",
    name: "DALLE",
  },{
    link:"https://nextjs.org/",
    name: "NEXT.JS",
  },{
    link:"https://www.convex.dev/",
    name: "Convex",
  }],
  links:[{
    link:"https://github.com/gauravnadkarni/castle-doors-treasure",
    caption: "Github",
  }],
}]

const Projects: React.FC = () => {
  const {projectBoxProps} = useDataContext();
  const projectCardsPropsWithIcons:Array<ProjectCardPropsWithIcons> = projectBoxProps.map<ProjectCardPropsWithIcons>((props)=>({
    ...props,
    links: props.links.map<ProjectCardPropsWithIcons["links"][number]>((link)=>({
      link:link.link,
      icon:ICON_MAP[link.iconText]
    }))
  }))

  return (
    <Grid container spacing={2}>
      {projectCardsPropsWithIcons.map((project, idx) =>(<Grid size={{lg:4,md:4,xl:4,xs:12,sm:12}}>
        <GridItem>
          <ProjectCard key={idx} {...project}/>
        </GridItem>
      </Grid>))}
    </Grid>
  );
};

export default Projects;
