import {
  Grid2 as Grid,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import GridItem from "../components/GridItem";
import SkillsBox from "../components/skills/SkillsBox";

const DATA:Array<{
  caption:string;
  color: "primary" | "info"
}> = [{
  caption:"JavaScript",
  color: "primary",
},{
  caption:"TypeScript",
  color: "primary",
},{
  caption:"Node.js",
  color: "primary",
},{
  caption:"React",
  color: "primary",
},{
  caption:"HTML/CSS",
  color: "primary",
},{
  caption:"MySQL/PostgreSQL",
  color: "primary",
},{
  caption:"MongoDB",
  color: "primary",
},{
  caption:"AWS/Azure",
  color: "primary",
},{
  caption:"Integrations",
  color: "primary",
},{
  caption:"Web Development",
  color: "primary",
},{
  caption:"Backend Development",
  color: "primary",
},{
  caption:"NestJS",
  color: "primary",
},{
  caption:"expressJS",
  color: "primary",
},{
  caption:"Redis",
  color: "primary",
},{
  caption:"RabbitMQ/SQS",
  color: "primary",
},{
  caption:"Serverless",
  color: "primary",
},{
  caption:"git",
  color: "primary",
},{
  caption:"JIRA",
  color: "primary",
},{
  caption:"JAVA",
  color: "info",
},{
  caption:"Php",
  color: "info",
}]

const Home: React.FC = () => {
  return (
    <Grid size={12}>
      <GridItem>
        <Box
          sx={{padding:"20px"}}>
        <SkillsBox skills={DATA}/>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
