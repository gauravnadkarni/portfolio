import { Grid2 as Grid } from "@mui/material";
import AboutBox from "../components/about/AboutBox";
import useDataContext from "../hooks/DataContext";

const About: React.FC = () => {
  const { aboutBoxProps } = useDataContext();

  return (
    <Grid container size={12}>
      <AboutBox {...aboutBoxProps} />
    </Grid>
  );
};

export default About;
