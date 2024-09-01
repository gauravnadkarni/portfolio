import { Grid2 as Grid } from "@mui/material";
import GridItem from "../components/GridItem";
import ProjectCard from "../components/projects/ProjectCard";

const Projects: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      <Grid size={4}>
        <GridItem>
          <ProjectCard />
        </GridItem>
      </Grid>
      </Grid>
  );
};

export default Projects;
