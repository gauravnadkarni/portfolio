import ContactBox from "../components/Contact/ContactBox";
import GridItem from "../components/GridItem";
import { Grid2 as Grid } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <GridItem>
          <ContactBox />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default Contact;
