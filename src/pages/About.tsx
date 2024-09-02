import AboutBox from "../components/about/AboutBox";
import Layout from "../layout/PublicLayout";
import { Grid2 as Grid, Typography, Button } from "@mui/material";
import GridItem from "../components/GridItem";

const DATA = {
  name: "Gaurav Nadkarni",
  email: "nadkarnigaurav@gmail.com",
  phone: "+91 (895) 133 5234",
  profile: "Fullstack Developer",
  image:{
    src:"",
    altText:"",
  },
  skills:[{
    name: 'Nodejs',
    weightText: '8/10',
    weightAmount: 80,
  },{
    name: 'JavaScript',
    weightText: '8/10',
    weightAmount: 80,
  },{
    name: 'React',
    weightText: '7/10',
    weightAmount: 70,
  },{
    name: 'Database',
    weightText: '8/10',
    weightAmount: 80,
  },{
    name: 'Backend',
    weightText: '8/10',
    weightAmount: 85,
  },{
    name: 'Frontend',
    weightText: '7/10',
    weightAmount: 70,
  },],
}

const About: React.FC = () => {
  return (
    <Grid container size={12}>
      <GridItem>
        <AboutBox {...DATA}/>
      </GridItem>
    </Grid>
  );
};

export default About;
